const pessoa = { nome: "Joao" }
// pessoa -> 123 - {...}
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa = { nome: "Ana" }
// pessoa -> 456 -> {...}

const pessoaConstante = Object.freeze(pessoa)
pessoa.nome = "Maria"
console.log(pessoa.nome)
console.log(pessoaConstante)
