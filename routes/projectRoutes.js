const express = require('express');
const { 
  getProjects, 
  getProject, 
  createProject, 
  updateProject, 
  deleteProject 
} = require('../controllers/projectController');
const { protect, authorize } = require('../middleware/authMiddleware');
const Project = require('../models/Project');

const router = express.Router();

// 公开路由
router.get('/', getProjects);
router.get('/:id', getProject);

// 保护路由 - 需要登录
router.use(protect);

// 只有认证用户才能创建、更新、删除项目
router.post('/', createProject);
router.put('/:id', authorize(Project), updateProject);
router.delete('/:id', authorize(Project), deleteProject);

module.exports = router;