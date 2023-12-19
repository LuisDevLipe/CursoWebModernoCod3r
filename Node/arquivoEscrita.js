const fs = require("fs")
const { json } = require("stream/consumers")

const produto = {
  nome: "Celular",
  preco: 1249.99,
  desconto: 0.15,
}

fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(produto),
  function (err) {
    if (err) throw err
    return console.log("Arquivo Salvo")
  }
)
