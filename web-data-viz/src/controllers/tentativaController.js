var tentativaModel = require("../models/tentativaModel"); 
    
function cadastrar(req, res) {
    var descricao = req.body.descricao;
    var resultado = req.body.resultado;
    var id_usuario = req.body.id_usuario

    if (descricao == undefined) {
        res.status(400).send("Sua descrição está undefined!")
    }
    else if (resultado == undefined) {
        res.status(400).send("Seu resultado está undefined!")
    }
    else if (id_usuario == undefined) {
        res.status(400).send("Seu ID de usuário está undefined!")
    } else {
        tentativaModel.cadastrar(descricao, resultado, id_usuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log( "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage)
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function buscarDadosDashboard(req, res) {
    console.log("Entrei no DashBoard")
    let id_usuario = req.params.id_usuario; 

    tentativaModel.buscarDadosDashboard(id_usuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado); 
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
function buscarEvolucao(req, res) {
    console.log("Entrei na evolução")
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando o histórico de evolução para o usuário: ${idUsuario}`);

    tentativaModel.buscarEvolucao(idUsuario)
        .then(function (resultado) {

            console.log("Resultado do Banco");
            console.log(resultado);

            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a evolução.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    buscarDadosDashboard,
    buscarEvolucao
}