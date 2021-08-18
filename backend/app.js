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
// app.use('/api/auth', userRoutes);

app.use('/api/auth/', userRoutes );

// app.use('/api/auth/signup', function (req, res, next) {
//   console.log('route /api/auth/signup est OK');
//   next();
// });
// app.use('/api/auth/login', function (req, res, next) {
//   console.log('route /api/auth/login est OK');
//   next();
// });


module.exports = app;