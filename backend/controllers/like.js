const Post = require('../models/post');

exports.likePost = (req, res, next) => {
  
  const userId = req.body.userId;
  const likes = req.body.like;
 
  console.log(likes);
  
  Post.findOne({_id: req.params.id})
  .then(() => {

      switch(likes) {
        case 1:
            Post.updateOne(
                { _id: req.params.id },
                {$push: {usersLiked: userId}, 
                $inc: {likes: 1}}
            )
            .then(() => res.status(200).json({ message: 'Like ajouté !'}))
            .catch(error => res.status(400).json({ error }));
        break;

        case 0:
            Post.findOne({_id: req.params.id})
                .then((post) => {

                    if (post.usersLiked.includes(userId)) {
                        console.log('Je suis un like')
                        Post.updateOne(
                            { _id: req.params.id },
                            {$pull: {usersLiked: userId},
                            $inc: {likes: -1}}
                        )
                        .then(() => res.status(200).json({ message: 'Like retiré !'}))
                        .catch(error => res.status(400).json({ error }));
                    }

                    if (post.usersDisliked.includes(userId)) {
                        console.log('Je suis un dislike')
                        Post.updateOne(
                            { _id: req.params.id }, 
                            {$pull: { usersDisliked: userId}, 
                            $inc: { dislikes: -1} }
                            
                        )
                        .then(() => res.status(200).json({ message: 'Dislike retiré !'}))
                        .catch(error => res.status(400).json({ error }));
                    } 
                })
                break;

        case -1:
            Post.updateOne(
                { _id: req.params.id }, 
                {$push: {usersDisliked: userId},
                $inc: {dislikes: 1}}
            )
            .then(() => res.status(200).json({ message: 'Like ajouté !'}))
            .catch(error => res.status(400).json({ error }));
        break;
      }
  });
  
}




  