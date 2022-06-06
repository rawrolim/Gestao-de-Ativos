const Sequelize = require('sequelize');
const connection = require('./Connection');

const Status =  connection.define("status",{
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
})

Status.sync({force: false}).then(()=>{});

module.exports = Status;