//arquivo apenas para fazer o servidor funionar
const app = require("./src/app")

//chamar a função para executar numa porta
const PORT = 5050

app.listen(PORT, function(){
    console.log('O nosso app esta rodando na porta ' + PORT)
})
