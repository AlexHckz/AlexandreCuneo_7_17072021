const Comment = require('../models/comment');

exports.createComment = (req, res, next) => {

  const userId = req.body.decodedToken.userId;

 Comment.create({
    text: req.body.text,
    user_id: userId,
    post_id: req.body.post_id,
  })
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }));
}

exports.getPostComments = (req, res, next) => {

  console.log("mon postId >", req.body.post_id)

 Comment.findAll({
    where: { post_id: req.body.post_id }
  }).then((user) => {res.status(200).json(user);})
    .catch((error) => {
      console.log('on est passé la', req.body.id);
      res.status(404).json({error: error});
    });

}



// exports.deleteComment = (req, res, next) => {
//   if (!req.params.id) {
//     res.status(400)
//     return;
//   }

//   Comment.destroy({
//     where: { id: req.body.id }
//   })
//   .then(() => {
//       res.status(200).send(`Le commentaire ${req.body.id} a été delete `)
//       return;
//       console.log('Utilisateur a été supprimé !');
//   }).catch(
//     (error) => {
//       console.log('on est passé la', req.body.id);
//       res.status(404).json({
//         error: error
//       });
//     }
//   );
// }




  