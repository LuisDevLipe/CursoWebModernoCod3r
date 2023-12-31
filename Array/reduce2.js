const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: false },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
]

// Desafio 1: Tdoso os alunos são bolsitas ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas))
// Desafio 2: Algun aluno é bolsita ?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map((a) => a.bolsista).reduce(algumBolsista))
