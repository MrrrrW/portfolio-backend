# Portfolio & Blog API

完整的作品集和博客后端 API，使用 Node.js、Express、MongoDB 和 JWT 认证构建。

## 🚀 线上演示

- **API URL**: [部署后更新此链接]
- **前端演示**: [React 前端链接]
- **源代码**: https://github.com/MrrrrW/portfolio-backend

## 📋 功能特性

- ✅ JWT 用户认证系统
- ✅ 作品集项目管理 (CRUD)
- ✅ 博客文章系统 (CRUD) 
- ✅ 评论功能
- ✅ 联系表单处理
- ✅ 权限控制和授权
- ✅ 错误处理和验证
- ✅ 安全的密码哈希

## 🛠️ 技术栈

- **后端框架**: Node.js, Express.js
- **数据库**: MongoDB with Mongoose ODM
- **认证**: JSON Web Tokens (JWT), bcryptjs
- **安全**: Helmet, CORS, 环境变量
- **开发工具**: Nodemon, Dotenv

## 📁 API 端点文档

### 认证端点

#### 🔐 用户注册
- **方法**: `POST`
- **URL**: `/api/users/register`
- **权限**: 公开
- **请求体**:
```json
{
  "username": "string (必填, 唯一, 最少3字符)",
  "email": "string (必填, 唯一, 有效邮箱格式)", 
  "password": "string (必填, 最少6位)"
}
🔑 用户登录
方法: POST

URL: /api/users/login

权限: 公开

请求体:


{
  "email": "string (必填)",
  "password": "string (必填)"
}
👤 获取当前用户
方法: GET

URL: /api/users/me

权限: 需要 Token

Headers: Authorization: Bearer <your_jwt_token>

项目端点
📂 获取所有项目
方法: GET

URL: /api/projects

权限: 公开

响应: 返回所有项目列表

📄 获取单个项目
方法: GET

URL: /api/projects/:id

权限: 公开

参数: id - 项目ID

➕ 创建项目
方法: POST

URL: /api/projects

权限: 需要 Token

Headers: Authorization: Bearer <your_jwt_token>

请求体:


{
  "title": "string (必填, 最多100字符)",
  "description": "string (必填, 最多1000字符)",
  "technologies": ["React", "Node.js", "MongoDB"],
  "imageUrl": "string (可选, 图片URL)",
  "repoUrl": "string (可选, GitHub链接)", 
  "liveUrl": "string (可选, 演示链接)"
}
✏️ 更新项目
方法: PUT

URL: /api/projects/:id

权限: 需要 Token + 作者权限

Headers: Authorization: Bearer <your_jwt_token>

🗑️ 删除项目
方法: DELETE

URL: /api/projects/:id

权限: 需要 Token + 作者权限

Headers: Authorization: Bearer <your_jwt_token>

博客端点
📝 获取所有博客文章
方法: GET

URL: /api/blog

权限: 公开

📖 获取单个博客文章
方法: GET

URL: /api/blog/:id

权限: 公开

➕ 创建博客文章
方法: POST

URL: /api/blog

权限: 需要 Token

Headers: Authorization: Bearer <your_jwt_token>

请求体:


{
  "title": "string (必填, 最多200字符)",
  "content": "string (必填, 最多10000字符)",
  "excerpt": "string (可选, 最多300字符)",
  "tags": ["技术", "教程", "心得"]
}
评论端点
💬 获取文章评论
方法: GET

URL: /api/blog/:postId/comments

权限: 公开

➕ 创建评论
方法: POST

URL: /api/blog/:postId/comments

权限: 需要 Token

Headers: Authorization: Bearer <your_jwt_token>

请求体:

json
{
  "body": "string (必填, 最多1000字符)"
}
联系端点
📧 发送消息
方法: POST

URL: /api/contact

权限: 公开

请求体:


{
  "name": "string (必填, 最多50字符)",
  "email": "string (必填, 有效邮箱格式)",
  "message": "string (必填, 最多2000字符)"
}
🚀 本地开发
1. 克隆仓库
bash
git clone https://github.com/MrrrrW/portfolio-backend.git
cd portfolio-backend
2. 安装依赖
bash
npm install
3. 环境配置
创建 .env 文件：

env
PORT=5000
MONGODB_URI=您的MongoDB连接字符串
JWT_SECRET=您的JWT密钥
NODE_ENV=development
4. 启动开发服务器
bash
npm run dev
服务器将在 http://localhost:5000 启动

🌐 部署指南
部署到 Render.com
推送代码到 GitHub

在 Render.com 注册账号

创建新的 Web Service

连接 GitHub 仓库

设置环境变量

自动部署

环境变量配置
MONGODB_URI: MongoDB Atlas 连接字符串

JWT_SECRET: 复杂的随机字符串

NODE_ENV: production

🧪 API 测试流程
基础测试流程：
注册用户 → 获取 Token

使用 Token 创建项目/博客

测试公开端点

测试权限控制

测试工具推荐：
Thunder Client (VS Code 扩展)

Postman

Insomnia

📞 支持
如有问题或建议，请通过以下方式联系：

GitHub Issues: 创建Issue

邮箱: [3305942670@qq.com]

📝 项目信息
课程: Web Data Management and Application -- The Back-End Engine
项目类型: Capstone Project - The Portfolio & Blog API
学生: [23998117]
完成日期: 2025年11月

此项目为教育用途构建，展示了完整的全栈开发技能。