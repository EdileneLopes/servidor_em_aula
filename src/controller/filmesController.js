const { request, response } = require("express")
const filmes = require("../model/filmes.json")

const getAll = (request, response) => {
    console.log(request.url) //caminho para encontrar o json
    //se der certo envie os filmes(variável filmes)
    response.status(200).send(filmes)
}

//exportar para usar em outro arquivo
module.exports = {
    getAll
}