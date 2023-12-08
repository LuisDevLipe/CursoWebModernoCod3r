function Pessoa(nome = "Alguém", sobrenome = "Silva") {
  // varíaeis públicas
  this.nome = nome
  this.sobrenome = sobrenome

  // método privado
  let introducao = "Meu nome é: "

  // método público
  this.falar = function () {
    console.log(introducao, this.nome, this.sobrenome)
  }
}

const alguém = new Pessoa()
alguém.falar()
const eu = new Pessoa("Luis", "Felipe")
eu.falar()
console.log(eu.nome)
console.log(eu.introducao)
