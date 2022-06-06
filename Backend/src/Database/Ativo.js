const Sequelize = require('sequelize');
const connection = require('./Connection');
const Local = require('./Local');
const Marca = require('./Marca');
const Status = require('./Status');
const TipoAtivo = require('./TipoAtivo');
const Usuario = require('./Usuario');

const Ativo =  connection.define("ativo",{
    serial:{
        type: Sequelize.STRING,
        allowNull: true
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: true
    },
    responsavel:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

Local.hasMany(Ativo);
Ativo.belongsTo(Local);

Marca.hasMany(Ativo);
Ativo.belongsTo(Marca);

Status.hasMany(Ativo);
Ativo.belongsTo(Status);

TipoAtivo.hasMany(Ativo);
Ativo.belongsTo(TipoAtivo);

Usuario.hasMany(Ativo);
Ativo.belongsTo(Usuario);

Ativo.sync({force: false}).then(()=>{});

module.exports = Ativo;