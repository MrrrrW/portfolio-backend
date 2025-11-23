const express = require('express');
const { 
  getComments, 
  createComment, 
  deleteComment 
} = require('../controllers/commentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// 公开路由 - 获取评论
router.get('/:postId/comments', getComments);

// 保护路由 - 需要登录才能创建和删除评论
router.use(protect);
router.post('/:postId/comments', createComment);
router.delete('/comments/:id', deleteComment);

module.exports = router;