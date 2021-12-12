const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
  Post.create({
    name: req.body.name,
    text: req.body.text,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    user_id: req.body.user_id,
  })
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllPosts = (req, res, next) => {
  const posts = Post.findAll()
    .then((posts) => {
      res.status(201).json(posts);
    })
    .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    where: { id: req.body.id }
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyPost = (req, res, next) => {
  if (!req.body.name || !req.body.text || !req.params.id) {
    res.status(400).send("Bad request");
    return;
  }
  // Récuper le créateur du post req.params.id en DB
  // comparer le créateur et le token req.body.decodedToken.userId
  console.log("req.param.id >" + req.params.id)   
  Post.update(
    {name: req.body.name, text: req.body.text}, 
    {where: { id: req.params.id }}
  ).then(() => res.status(200).json({ message: 'Objet modifié !' }))
  .catch((error) => {
    res.status(400).json({ error })
  });
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !' }))

          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};



