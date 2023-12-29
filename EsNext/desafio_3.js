const fs = require("node:fs")
const path = require("node:path")

// Minha resposta
const caminho = path.join(__dirname, "../Função/dados.txt")

new Promise((resolve) => {
  fs.readFile(caminho, function (_, conteudo) {
    resolve(conteudo.toString())
  })
  console.log("Deepois de ler o arquivo")
}).then(console.log)

// Resposta do professor

function lerArquivo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, function (_, conteudo) {
      resolve(conteudo.toString())
    })
    console.log("Depois de ler o arquivo...")
  })
}

lerArquivo(caminho)
  .then((conteudo) => conteudo.split("\n"))
  .then((linhas) => linhas.join(", function gerarNumerosEntre(min, max) {
  if (min > max) {
    ;[min, max] = [max, min]
  }
  return new Promise((resolve) => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    resolve(aleatorio)
  })
}"))
  .then((conteudo) => `O valor Final é : ${conteudo}`)
  .then(console.log)

//   .then((conteudo) => console.log(conteudo))
// continuando o exemplo
