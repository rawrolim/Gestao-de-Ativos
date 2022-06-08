const express = require("express");
const UsuarioController = require('../Controller/UsuarioController');
const TipoAtivoController = require('../Controller/TipoAtivoController');
const LocalController = require('../Controller/LocalController');
const MarcaController = require('../Controller/MarcaController');
const StatusController = require('../Controller/StatusController');
const AtivoController = require('../Controller/AtivoController');
const api = express.Router();

api.get("/", function(req,res,next){
    res.status(200).send({
        title: "Rota de API"
    });
});

api.get("/usuario", UsuarioController.get);
api.get("/usuario/:id", UsuarioController.get);
api.delete("/usuario/:id", UsuarioController.delete);
api.post("/usuario", UsuarioController.post);
api.put("/usuario/:id", UsuarioController.put);

module.exports = api;