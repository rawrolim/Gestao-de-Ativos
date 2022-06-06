const Sequelize = require('sequelize');
const connection = require('./Connection');

const Local =  connection.define("local",{
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    base:{
        type: Sequelize.STRING,
        allowNull: true
    },
    sala:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

Local.sync({force: false}).then(()=>{});

module.exports = Local;