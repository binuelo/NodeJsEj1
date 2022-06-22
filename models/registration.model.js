const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');
//define=> define un modelo
const Registration = db.define('registration', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  entranceTime: {
    type: DataTypes.DATE,
  },
  exitTime: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'working',
  },
});

module.exports = { Registration };
