const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const Like = sequelize.define("like" , {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_post: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
  });

module.exports = Like;

