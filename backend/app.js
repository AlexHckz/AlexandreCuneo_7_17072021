const express = require("express");
const app = express();

app.use(express.urlencoded({ extended : true}));
app.use (express.json()); 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// APPEL DES ROUTES UTILISATEURS 
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

app.use('/api/auth/', userRoutes );


module.exports = app;