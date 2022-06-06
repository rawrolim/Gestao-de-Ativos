const Sequelize = require('sequelize');
const connection = require('./Connection');

const TipoAtivo = connection.define("tipo_ativo",{
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
})

TipoAtivo.sync({force: false}).then(()=>{});

module.exports = TipoAtivo;