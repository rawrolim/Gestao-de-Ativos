

class StatusModel{
    id;
    nome;
    status;
    updatedAt;
    createdAt;

    constructor(obj={
        id: false,
        nome: false,
        status: false
    }){
        if(obj.id){
            this.id = obj.id;
        }
        if(obj.nome){
            this.nome = obj.nome;
        }
        if(obj.status){
            this.status = obj.status;
        }
    }
}