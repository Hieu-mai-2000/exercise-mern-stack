const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: 'Anonymous',
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    attachment: {
      type: String,
      default: 'https://imgbin.com/img/imgbin/icons/ms-icon-310x310.png',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('post', schema)
