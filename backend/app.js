const express = require('express');
const app = express();

const mysql = require('mysql');
const { Sequelize } = require('sequelize');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

const sequelize = new Sequelize("nom_base_de_donnees", "root", "", {
  dialect: "mysql",
  host: "localhost"
});
try {
  sequelize.authenticate();
  console.log('Connecté à la base de données MySQL!');
} catch (error) {
  console.error('Impossible de se connecter, erreur suivante :', error);
}


module.exports = app;