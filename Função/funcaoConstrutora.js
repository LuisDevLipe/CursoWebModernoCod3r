function Carro(velocideMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0
  // metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocideMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocideMaxima
    }
  }
  // metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
}
const uno = new Carro()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
