// sem promisse
const http = require("http")

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  http.get(url, function (res) {
    let resultado = ""
    res.on("data", function (dados) {
      resultado += dados
    })
    res.on("end", function () {
      callback(JSON.parse(resultado))
    })
  })
}

let nomes = []

getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`))
  getTurma("B", function (alunos) {
    nomes = nomes.concat(alunos.map((b) => `B:${b.nome}`))
    getTurma("C", function (alunos) {
      nomes = nomes.concat(alunos.map((c) => `C: ${c.nome}`))
      console.log(nomes)
    })
  })
})
