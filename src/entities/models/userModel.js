const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../shared/api/db');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
})



module.exports = User;