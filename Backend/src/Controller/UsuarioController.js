const { Sequelize } = require('sequelize');
const Usuario = require('../Database/Usuario');
const UsuarioModel = require("../Models/UsuarioModel");
const md5 = require('md5');

exports.post = (req, res) => {
    let usuario = new UsuarioModel(req.body);
    usuario.status=true;
    usuario.GetUsuarioEmail().then(u=>{
        if(!usuario.VerificaErroCreate().erro[0]){
            usuario.senha = md5(usuario.senha);
            Usuario.create(usuario).then(r=>{
                res.send(r);
            });
        }else{
            res.status(200).send(usuario.VerificaErroCreate());
        }
    })
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    let usuario = new UsuarioModel(id);
    Usuario.update(req.body,{
        where: {
            id: id
        }
    })
    .then(r => {
        res.status(200).send(JSON.stringify());
    })
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    Usuario.destroy({
        where: {
            id: id
        }
    })
    .then(r => {
        res.status(200).send({error: 0});
    })
};
exports.get = (req, res, next) => {
    if(req.params.id){
        let id = req.params.id;
        Usuario.findAll({
            raw: true,
            where: {
                id: id
            }
        }).then(r => {
            res.status(200).send(JSON.stringify(r));
        });
    }else{
        Usuario.findAll({raw: true}).then(r => {
            res.status(200).send(JSON.stringify(r));
        });
    }
};