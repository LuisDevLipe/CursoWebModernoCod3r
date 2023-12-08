class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "Professo") {
    super(sobrenome) // chama o construtor da classe superior na herança
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva")
  }
}

const filho = new Filho()

console.log(filho)
