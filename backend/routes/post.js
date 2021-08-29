const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post.js');
const likeCtrl = require('../controllers/like.js');

router.get('/posts', postCtrl.getAllPosts);
router.post('/', auth, multer, postCtrl.createPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);


router.post('/:id/like', auth, likeCtrl.likePost);

module.exports = router;