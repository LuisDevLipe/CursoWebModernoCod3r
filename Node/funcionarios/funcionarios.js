const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")
const _ = require("lodash")
axios.get(url).then(function (response) {
  const funcionarios = response.data

  const funcionarias = funcionarios.filter(
    (funcionario) => funcionario.genero === "F"
  )
  const funcionariasChinesas = funcionarias.filter(
    (funcionario) => funcionario.pais === "China"
  )
  const funcionariasChinesasOrdenadasPorSalario = funcionariasChinesas.sort(
    (a, b) => a.salario - b.salario
  )
  const funcionariaComMenorSalario = _.first(
    funcionariasChinesasOrdenadasPorSalario
  )
  console.log(funcionariaComMenorSalario)
})
// Desafio , filtrar a funcionaria chinesa que tenha o menor salário
