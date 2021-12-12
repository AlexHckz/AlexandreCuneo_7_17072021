const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post.js');
const likeCtrl = require('../controllers/like.js');
const commentCtrl = require('../controllers/comment.js');

router.get('/posts', postCtrl.getAllPosts);
router.post('/', postCtrl.createPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);

router.post('/:id/comment', auth, commentCtrl.createComment);
router.post('/:id/comments', commentCtrl.getPostComments);

router.post('/:id/like', auth, likeCtrl.likePost);
router.post('/:id/islike', auth, likeCtrl.isLike);

module.exports = router;