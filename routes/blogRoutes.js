const express = require('express');
const { 
  getBlogPosts, 
  getBlogPost, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost 
} = require('../controllers/blogController');
const { protect, authorize } = require('../middleware/authMiddleware');
const BlogPost = require('../models/BlogPost');

const router = express.Router();

// 公开路由
router.get('/', getBlogPosts);
router.get('/:id', getBlogPost);

// 保护路由 - 需要登录
router.use(protect);

// 只有认证用户才能创建、更新、删除博客文章
router.post('/', createBlogPost);
router.put('/:id', authorize(BlogPost), updateBlogPost);
router.delete('/:id', authorize(BlogPost), deleteBlogPost);

module.exports = router;