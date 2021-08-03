const express = require('express');

// security
require('dotenv').config()
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

const path = require('path');
const userRoutes = require('./routes/user.js');
// const sauceRoutes = require('./routes/sauce.js');


// HELMET
app.use(helmet());

// RATE LIMITER
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// RATE LIMITER
app.use(limiter);

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

// app.use('/api/auth', function (req, res, next) {
//   console.log('test');
//   next();
// });

module.exports = app;