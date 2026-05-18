var database = require("../database/config");

function cadastrar(descricao, resultado, fk_usuario) {
    var instrucaoSql = `
        INSERT INTO tentativas (descricao, resultado, fk_usuario)
        VALUES ('${descricao}', '${resultado}', ${fk_usuario} )
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};