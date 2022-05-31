const express = require("express");
const app = express();
const Usuario = require('./src/Models/Usuario');

app.get("/", function(req,res){
    res.send('Testsse');
});

app.listen(3000, '0.0.0.0',()=>{console.log("App rodando!");});