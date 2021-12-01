const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const Post = sequelize.define("post" , {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_user: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  });

module.exports = Post;

