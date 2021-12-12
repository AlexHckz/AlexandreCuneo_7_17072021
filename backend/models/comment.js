const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const Comment = sequelize.define("comment" , {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });

module.exports = Comment;

