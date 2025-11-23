const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  body: {
    type: String,
    required: [true, '评论内容是必填项'],
    trim: true,
    maxlength: [1000, '评论不能超过1000个字符']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlogPost',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);