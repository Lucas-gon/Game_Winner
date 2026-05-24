var database = require("../database/config");

function cadastrar(descricao, resultado, fk_usuario) {
    var instrucaoSql = `
        INSERT INTO tentativas (descricao, resultado, fk_usuario)
        VALUES ('${descricao}', '${resultado}', ${fk_usuario} )
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosDashboard(idUsuario) {
    var instrucaoSql = `
        SELECT fg_porcentagem, total_arremessos, total_acertos, total_erros 
        FROM vw_dashboard_usuario 
        WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando no Model: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarEvolucao(idUsuario) {
    var instrucaoSql = `
    SELECT resultado, DATE_FORMAT(data_registro, '%H:%i') as hora 
    FROM tentativas 
    WHERE fk_usuario = ${idUsuario} 
    ORDER BY id_tentativa DESC LIMIT 7;`;
    
    console.log("Executando a query de evolução: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    buscarDadosDashboard, 
    buscarEvolucao       
};