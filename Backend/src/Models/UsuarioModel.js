const Usuario = require('../Database/Usuario');

class UsuarioModel{
    id;
    nome;
    senha;
    email;
    status;
    senha_repetida;
    updatedAt;
    createdAt;

    constructor(obj=
        {
            id: false,
            nome: false,
            senha: false,
            senha_repetida: false,
            email: false,
            status: false
        }
    ){
        this.id = obj.id;
        this.nome = obj.nome;
        this.senha = obj.senha;
        this.senha_repetida = obj.senha_repetida;
        this.email = obj.email;
        this.status = obj.status;
    }

    VerificaErroCreate(){
        let arr_erro = Array();
        if(!this.nome){
            arr_erro.push("Insira o nome.");
        }
        if(!this.senha){
            arr_erro.push("Insira a senha.");
        }else{
            if(this.senha != this.senha_repetida){
                arr_erro.push("As senhas devem ser iguais.");
            }
        }
        if(!this.email){
            arr_erro.push("Insira o email.");
        }else{
            if(this.id){
                arr_erro.push("Já existe um usuário com esse email.");
            }
        }        
        
        if(arr_erro.lenght==0){
            arr_erro.push(false);
        }
        return {erro:arr_erro};
    }

    async GetUsuarioEmail(){
        await Usuario.findOne({where:{email:this.email}}).then(r=>{
            if(r){
                this.id = r.id;
                this.nome = r.nome;
                this.email = r.email;
                this.senha = r.senha;
                this.senha_repetida = r.senha;
                this.status = r.status;
                this.updatedAt = r.updatedAt;
                this.createdAt = r.createdAt;
            }
        });
    }

    async GetUsuarioId(id){
        await Usuario.findOne({where:{id:id}}).then(u => {
            this.id = u.id;
            this.nome = u.nome;
            this.email = u.email;
            this.senha = u.senha;
            this.senha_repetida = u.senha;
            this.status = u.status;
            this.updatedAt = u.updatedAt;
            this.createdAt = u.createdAt;
        });
    }
}

module.exports = UsuarioModel;