const Sequelize = require('sequelize');
const connection = require('./Connection');

const Marca =  connection.define("marca",{
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
})

Marca.sync({force: false}).then(()=>{});

module.exports = Marca;