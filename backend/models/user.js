const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');


  const User = sequelize.define("user" , {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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
    password: {
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
    }
  });

  module.exports = User;

