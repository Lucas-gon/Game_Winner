var tentativaModel = require("../model/tentativaModel"); 
    
function cadastrar(req, res) {
    var descricao = req.body.descricao;
    var resultado = req.body.resultado;
    var idUsuario = req.body.id_usuario

    if (descricao == undefined) {
        res.status(400).send("Sua descrição está undefined!")
    }
    else if (resultado == undefined) {
        res.status(400).send("Seu resultado está undefined!")
    }
    else if (id_usuario == undefined) {
        res.status(400).send("Seu ID de usuário está undefined!")
    } else {
        tentativaModel.cadastrar_tentativa(descricao, resultado, id_usuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

module.exports = {
    cadastrar
}