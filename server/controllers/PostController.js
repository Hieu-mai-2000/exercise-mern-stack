const PostModal = require('../modals/post')

const getPosts = async (req, res) => {
  try {
    const posts = await PostModal.find()
    res.status(200).json({ posts })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createPost = async (req,res) =>{
  const post = new PostModal({
    title: req.body.title,
    content:req.body.content,
    author: req.body.author,
    likeCount: req.body.likeCount,
    attachment: req.body.attachment,
  })
  try {
    await post.save()
    res.status(201).json({ msg: 'create successfully!!!', post: post })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getPosts,
  createPost,
}
