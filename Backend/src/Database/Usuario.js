const Sequelize = require('sequelize');
const connection = require('./Connection');

const Usuario = connection.define('usuario',{
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
});

Usuario.sync({force: false}).then(()=>{});


module.exports = Usuario;