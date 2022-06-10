const Status = require('../Database/Status');

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
    if(req.params.id){
        Status.findAll({where:{id:req.params.id}}).then(r => {
            res.status(200).send(JSON.stringify(r));
        });
    }else{
        Status.findAll().then(r => {
            res.status(200).send(JSON.stringify(r));
        });
    }
};