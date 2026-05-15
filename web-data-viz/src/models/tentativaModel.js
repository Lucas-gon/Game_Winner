var database = require("../database/config");
const { cadastrar } = require("./usuarioModel");

function cadastrar_tentativa(descricao, resultado, fk_usuario) {
    var instrucaoSql = `
        INSERT INTO tentativas (descricao, resultado, fk_usuario)
        VALUES ('${descricao}', '${resultado}', '${id_usuario}' )
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};