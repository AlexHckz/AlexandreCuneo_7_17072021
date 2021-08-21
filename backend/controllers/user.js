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
  const user = User.create({ name: req.body.name, firstName: req.body.firstName, email: req.body.email, password: req.body.password, biography: req.body.biography  })
  .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
  .catch(error => res.status(400).json({ error }));

};

exports.login = async (req, res, next) => {
  console.log('req body email est' + req.body.email);
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user === null) {
    console.log('Not found');
  } else {
    console.log(user instanceof User);
    console.log(user.email); // 'My Title'
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    console.log('salut'); 
    const users = await User.findAll()
    return res.json(users)
    console.log("All users:", JSON.stringify(users, null, 2)); 
  } 
  catch (err) {
    console.log(err)
    return res.status(500).json({error : 'Something went wrong'})
  }
}