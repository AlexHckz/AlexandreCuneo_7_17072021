const Like = require('../models/like');

exports.isLike = (req, res, next) => {
  if (!req.params.id) {
    res.status(400)
    return;
  }
  const userId = req.body.decodedToken.userId;
  
  Like.findOne({ where: { id_post: req.params.id, id_user: userId  } }).then((like) => {
    let likeValue = 0;
    if (like && like.value) likeValue = like.value;
    res.status(200).send({like: likeValue})
  }).catch(error => res.status(500).json({ error }));
  return;
}

exports.likePost = (req, res, next) => {
  console.log("req.body.like",req.body.like);
  if (!req.params.id || req.body.like > 1 || req.body.like < -1) {
    res.status(400).send("err400");
    return;
  }
  const userId = req.body.decodedToken.userId;

  Like.findOne({ where: { id_post: req.params.id, id_user: userId  } }).then((like) => {
    let likeExist = false;
    if (like) likeExist = true;
    if (!likeExist) { //on ajoute un like ou dislike
      Like.create({  
        id_post: req.params.id,
        id_user: userId,
        value: req.body.like,
      }).then(() => res.status(201).json({ message: 'Like ou Dislike enregistré !' }))
      .catch(error => res.status(500).json({ error }));
    } else { // il existe  on update la value avec req.body.like 
      Like.update(
        {value: req.body.like}, 
        {where: { id_post: req.params.id, id_user: userId }}
      ).then(() => res.status(200).json({ message: 'Like ou Dislike updated !' }))
      .catch(error => res.status(500).json({ error }));
    }
  }).catch(error => res.status(500).json({ error }));
}




  