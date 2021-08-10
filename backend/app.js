const express = require('express');

// security
// require('dotenv').config()
// const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");

const app = express();



const path = require('path');
const userRoutes = require('./routes/user.js');
const postRoutes = require('./routes/post.js');

// const db = require('./models/index.js');

// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('projet7_test', 'root', null, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: '3306'
// });

// try {
//  sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// console.log(sequelize)

// sequelize.sync({ force: true })
// .then((req) => { 
//     console.log("table crééecré");
// });


// HELMET
// app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// RATE LIMITER
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, 
//   max: 100 
// });
// app.use(limiter);
app.use(express.json());


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);

app.use('/api/auth', function (req, res, next) {
  console.log('test');
  next();
});

module.exports = app;