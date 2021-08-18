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
    biography: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: true
      },
    }
  });

  // (async () => {
  //   await sequelize.sync();
  //     const jane = await User.create({ name: "Marshall", firstName: "Jane", email: "test3@gmail.com", biography: "blabla"});
  //     // Jane exists in the database now!
  //     console.log(jane instanceof User); // true
  //     console.log(jane.name); // "Jane"
  // })();

  module.exports = User;

