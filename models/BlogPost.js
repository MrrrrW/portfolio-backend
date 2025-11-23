const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, '文章标题是必填项'],
    trim: true,
    maxlength: [200, '标题不能超过200个字符']
  },
  content: {
    type: String,
    required: [true, '文章内容是必填项'],
    maxlength: [10000, '内容不能超过10000个字符']
  },
  excerpt: {
    type: String,
    maxlength: [300, '摘要不能超过300个字符']
  },
  featuredImage: {
    type: String,
    default: ''
  },
  tags: [{
    type: String,
    trim: true
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('BlogPost', blogPostSchema);