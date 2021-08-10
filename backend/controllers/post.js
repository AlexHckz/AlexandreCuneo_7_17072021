const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
  console.log('post créé');
//   const postObject = JSON.parse(req.body.post);
//   console.log(req.body.post)
//   delete postObject._id;
//   const post = new Post({
//     ...postObject,
//     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//   });
//   post.save()
//     .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
//     .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id
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
  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        const postImage = req.file ?
        {
          ...JSON.parse(req.body.post),
          imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
          
        } : { ...req.body };
    
      Post.updateOne({ _id: req.params.id }, { ...postImage, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
      });
    })
  
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
}; 


exports.getAllPosts = (req, res, next) => {
  Post.find().then(
    (posts) => {
      res.status(200).json(posts);
      console.log('requete getAllPosts est OK');
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


