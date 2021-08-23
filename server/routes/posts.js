var express = require('express')
var router = express.Router()
const postController = require('../controllers/PostController.js')


router.get('/', postController.getPosts)
router.post('/', postController.createPost)
router.put('/', postController.getPosts)
router.delete('/', postController.getPosts)

module.exports = router
