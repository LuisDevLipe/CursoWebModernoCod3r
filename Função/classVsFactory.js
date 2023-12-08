class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log("Meu nome é ", this.nome)
  }
}
const p1 = new Pessoa("João")
p1.falar()

const pessoa = (nome) => {
  return {
    falar: () => console.log("Meu nome é: ", nome),
  }
}

const p2 = pessoa("Lucas")
p2.falar()

// Obs. O navegador teve dificuldade em entender quem chamou a variável nome, através do this em uma classe. Enquanto que o objeto feito com a função arrow não teve esse problema.
// A arrow tem um entendimento melhor do contexto léxico

