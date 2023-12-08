const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]
// parâmetros primeiro uma referencia do item, 
// segundo o indice no array
// terceiro = o próprio array

aprovados.forEach(function (nome, indice) {
  console.log(indice + 1, ") ", nome)
})

aprovados.forEach((nome) => console.log(nome))

const exibirAprovados = (aprovado) => console.log(aprovado)

aprovados.forEach(exibirAprovados)
