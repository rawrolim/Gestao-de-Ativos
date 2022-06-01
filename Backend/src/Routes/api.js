const express = require("express");
const UsuarioController = require('../Controller/UsuarioController');
const api = express.Router();

api.get("/", function(req,res,next){
    res.status(200).send({
        title: "Rota de API"
    });
});

api.get("/usuario", UsuarioController.get);

module.exports = api;