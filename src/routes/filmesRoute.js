const { Router } = require("express")
//são rotas expecíficas para lugar desejado, nesse caso: filmes desejados

const express = require("express")

const router = express.Router()

const controller = require("../controller/filmesController")

router.get("/", controller.getAll)

module.exports = router
