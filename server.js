const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// 中间件
app.use(helmet());
app.use(cors());
app.use(express.json());

// 路由
app.use('/api/users', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/blog', require('./routes/blogRoutes'));
app.use('/api/blog', require('./routes/commentRoutes'));
app.use('/api/contact', require('./routes/messageRoutes'));

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Portfolio API 运行正常',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// 修复的 404 处理 - 放在所有路由之后
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `路由 ${req.method} ${req.originalUrl} 不存在`
  });
});

// 错误处理中间件
app.use(require('./middleware/errorMiddleware'));

// 连接数据库并启动服务器
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB 连接成功');
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 服务器运行在端口 ${PORT}`);
      console.log(`📚 API文档: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('❌ 数据库连接失败:', error);
    process.exit(1);
  }
};

startServer();