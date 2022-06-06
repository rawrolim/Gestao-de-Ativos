const Sequelize = require("sequelize");

const conn = new Sequelize('gestao_ativos','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conn;