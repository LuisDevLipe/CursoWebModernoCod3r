const porta = 3003
const bodyParser = require("body-parser")
const bancoDeDados = require("./bancoDeDados")
const express = require("express")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))



app.get("/produtos", function (req, res, next) {
res.send(bancoDeDados.getProdutos()) 
})

app.get("/produtos/:id", function (req,res,next) {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post("/produtos",function (req,res,next) {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})
        
app.put("/produtos/:id",function (req,res,next) {
    const produto = bancoDeDados.salvarProduto({
        id:req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete("/produtos/:id", function (req, res, next) {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})
app.listen(porta, () => console.log("Servidor está executnado na porta:", porta))
