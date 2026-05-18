var express = require("express");
var router = express.Router();
var tentativaController = require("../controllers/tentativaController");

var tentativasController = require("../controllers/tentativaController");

// Rota para cadastrar a tentativa (Chamada pelo Fetch)
router.post("/cadastrar", function (req, res) {
    tentativasController.cadastrar(req, res);
});

router.get("/dashboard/:idUsuario", function (req, res) {
    tentativaController.buscarDadosDashboard(req, res);
});

module.exports = router;