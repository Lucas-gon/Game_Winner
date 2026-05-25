var express = require("express");
var router = express.Router();
var tentativaController = require("../controllers/jogadoresController");

router.get("/listar", function (req, res) {
    tentativaController.listar(req, res);
});

module.exports = router;