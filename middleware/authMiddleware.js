const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: '用户不存在'
        });
      }
      
      next();
    } else {
      res.status(401).json({
        success: false,
        message: '未授权访问，请提供token'
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Token无效'
    });
  }
};

const authorize = (Model) => async (req, res, next) => {
  try {
    const resource = await Model.findById(req.params.id);
    
    if (!resource) {
      return res.status(404).json({
        success: false,
        message: '资源未找到'
      });
    }

    if (resource.user && resource.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: '无权执行此操作'
      });
    }

    if (resource.author && resource.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: '无权执行此操作'
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '服务器错误'
    });
  }
};

module.exports = { protect, authorize };