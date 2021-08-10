const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

  const User = sequelize.define("User" , {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: true
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: true
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: true
      },
    },
    biography: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: true
      },
    },
  });

  module.exports = User;

