const TipoAtivo = require('../Database/TipoAtivo');

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
exports.get = (req, res, next) => {
    TipoAtivo.findAll({raw: true}).then(r => {
        res.status(200).send(JSON.stringify(r));
    });
};