const Sequelize = require("sequelize");

const conn = new Sequelize('gestao_ativos','root','root',{
    host: 'db-gestao-ativos',
    dialect: 'mysql'
});

module.exports = conn;