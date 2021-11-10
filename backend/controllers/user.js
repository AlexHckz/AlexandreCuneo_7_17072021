const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const passwordValidator = require('password-validator');
// Create a schema
var schema = new passwordValidator();
// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces

exports.signup = (req, res, next) => {
  console.log(req.body)
  if (!schema.validate(req.body.password)) {
    res.status(400).json({ message: 'Mot de passe invalide !' })
  }else{
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      User.create({
        name: req.body.name, 
        firstName: req.body.firstName, 
        email: req.body.email, 
        password: hash, 
        biography: req.body.biography  
      })
      .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
      .catch(error => res.status(400).json({ error }));
    });
  }
};

exports.login = (req, res, next) => {
  const user = User.findOne({ where: { email: req.body.email } })
  .then((user) => {
    if (user === null) {
      console.log('Not found');
      res.status(400).json({ error })
    } else {
      //Vérification de bcrypt 
      res.status(201).json({ 
        message: 'Utilisateur ok !',
        userId: user.id,
        token: jwt.sign(
        { userId: user.id },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '24h' })
      })
    }
  })
  .catch(error => res.status(400).json({ error }));
  
};

exports.getAllUsers = (req, res, next) => {
    console.log('salut'); 
    const users = User.findAll()
    .then((users) => {
        res.status(201).json(users);
    })
    .catch(error => res.status(400).json({ error }));
};

exports.getOneUser = (req, res, next) => {
  //Récupérer Id user via le token
  
  console.log('nouveau test'); 
  User.findOne({
     where: { userId: req.body.id } 
  }).then(
    (user) => {
      res.status(200).json(user);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
