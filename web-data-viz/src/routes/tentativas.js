var express = require("express");
var router = express.Router();
var tentativaController = require("../controllers/tentativaController");



router.post("/cadastrar", function (req, res) {
    tentativaController.cadastrar(req, res);
});

router.get("/dashboard/:id_usuario", function (req, res) {
    tentativaController.buscarDadosDashboard(req, res);
});


router.get("/evolucao/:idUsuario", function (req, res) {
    tentativaController.buscarEvolucao(req, res);
});

module.exports = router;