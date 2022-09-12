const configDB = require("../config/banco.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(configDB.DATABASE, configDB.USER, configDB.PASSWORD, {
  host: configDB.HOST,
  dialect: configDB.DIALECT
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;