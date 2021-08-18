const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('projet7_test', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
});

try {
  sequelize.authenticate();
   console.log('Connection has been established successfully.');
 } catch (error) {
   console.error('Unable to connect to the database:', error);
 }

sequelize.sync({force:false});

module.exports = sequelize;
