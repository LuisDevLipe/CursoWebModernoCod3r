function criarObjeto() {
  return arguments["0"]
}
const obj = criarObjeto({
  nome: "Luis",
  idade: 25,
})

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  }
}

console.log(obj)

console.log(criarProduto("Luis Felipe", 204.99))
