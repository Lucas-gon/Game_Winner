var express = require("express");
var router = express.Router();

var tentativasController = require("../controllers/tentativaController");

// Rota para cadastrar a tentativa (Chamada pelo Fetch)
router.post("/cadastrar", function (req, res) {
    tentativasController.cadastrar(req, res);
});

module.exports = router;