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
  },
  { timestamps: true }
)

module.exports = mongoose.model('post', schema)
