const express = require('express');
const { 
  getMessages, 
  createMessage, 
  markAsRead, 
  deleteMessage 
} = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// 公开路由 - 任何人都可以发送消息
router.post('/', createMessage);

// 保护路由 - 只有登录用户才能查看和管理消息
router.use(protect);
router.get('/', getMessages);
router.put('/:id/read', markAsRead);
router.delete('/:id', deleteMessage);

module.exports = router;