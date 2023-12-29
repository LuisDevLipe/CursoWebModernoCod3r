let a = 1
console.log(a)
let p = new Promise(function (cumpriPromessa) {
  cumpriPromessa({
    x: 3,
    y: 4,
  })
})

console.log(typeof p)

p.then(function (valor) {
  console.log(valor)
})

const primeiroElemento = (arrayOuString) => arrayOuString[0]
const letraMinuscula = (letra) => letra.toLowerCase()

new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos", "Daniel"])
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log)
