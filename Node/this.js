console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
  console.log("Dentro de uma função")
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)
  this.perigo = "..."
}

logThis()

// Isso não é nenhuma novidade, pois já vimos isso na aula passada. Porém, quando falamos de arrow funcions, a coisa muda um pouco.

// Isso porque dentro de uma arrow function, o this não vai apontar mais para o objeto global, e sim para o module.export / exports.

// Isso pode causar um pouco de confusão, mas não é nada de outro mundo. Com um pouco mais de estudo você entende perfeitamente esse funcionamento. Vamos ao exemplo?

this.OláThis = "Eu não sou o objeto global, eu sou o module.exports"
const arrowFunction = () => {
  console.log("Não aponta para o global->", this === global)
  console.log("Aponta para o exports", this === exports)
  console.log("Aponta para o module.exports", this === module.exports)

  console.log("O this nesta função NÃO É O GLOBAL ->", this)
}

arrowFunction()
