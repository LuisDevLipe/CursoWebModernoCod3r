const carrinho = [
  '{"nome":"Borracha", "preco":3.45}',
  '{"nome":"Caderno","preco":13.90}',
  '{"nome":"Kit de Lápis","preco":41.22}',
  '{"nome":"Caneta","preco":7.50}',
]

// Retornar um array apenas com os precos

console.log(JSON.parse(carrinho[1]))

let resultado = carrinho.map(function (json) {
  return JSON.parse(json).preco
})
console.log(resultado)

const paraObjeto = (json) => JSON.parse(json)
const apenasPreco = (produto) => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado2)
