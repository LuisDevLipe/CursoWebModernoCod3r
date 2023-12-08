// Crie uma função que retorna a string "Olá," concatenada com um argumento text( a ser passado para a função) e com ponto de execlamação "!" no final.

function helloConcatArg(arg) {
  return "Olá, " + String(arg) + "!"
}

console.log(helloConcatArg("Luis Felipe"))

// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// Desconsiderando anos bissextos e dias corridos desde o ´ultimo aniversário
function idadeEmDias(idade = 1) {
  return idade * 365
}

console.log(idadeEmDias(25))
console.log(idadeEmDias(70))

// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual R$ X", em que x é o quanto o funcionários ganhou no mês

function salario(horasTrabalhadas, valorPorHora) {
  const salario = Number(horasTrabalhadas) * Number(valorPorHora)
  return "Salário igual a R$ " + String(salario)
}

console.log(salario(150, 40.5))

// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string.
// Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2º mês.

function mes_em_string(numero_do_mes) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  return meses[numero_do_mes - 1]
}
console.log(mes_em_string(1))

// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
function maiorOuIgual(a, b) {
  if (typeof a == "string") return false
  if (typeof b == "string") return false

  return a >= b
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))

// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o invero.
// Por exemplo, se a entrada for false, retornará true.
// Se o parâmetro for numérico o retorno será o número inverso.
// Por exemplo, se for fornecido 1, o retorno será -1.
// Se o parâmetro de entrada não for de nenhum dos tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ..."

function inverso(param) {
  if (typeof param === typeof true) return bolean_inverso()
  else if (typeof param === typeof 1) return numero_inverso()
  else return getErro()

  function bolean_inverso() {
    return !param
  }

  function numero_inverso() {
    return param * -1
  }

  function getErro() {
    tipoDeDados = typeof param
    return "Booleano ou número esperados, mas o parâmetro é do tipo ".concat(
      tipoDeDados
    )
  }
}
// exemplos
console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))
// extra
console.log(inverso(2000))

//Crie uma função que receba quatro números como parâmetro (numero, mínimo, maximo,inclusivo)
// e retorne se o parâmetro numero( o primeiro) está entre o minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo.
// Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false,
// portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo

function estaEntre(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo) return numero >= minimo && numero <= maximo
  else return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))

// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles.
// Porém, não utilize o operador de multiplicação

function multiplicarSemOperador(n1 = 0, n2 = 0) {
  let a = n1
  let b = n2
  for (a; a > 1; a--) {
    // console.log(a)
    b += n2
  }
  return b
}
console.log(multiplicarSemOperador(5, 5))
console.log(multiplicarSemOperador(1, 7))
// console.log(multiplicarSemOperador(7, 1))
// console.log(multiplicarSemOperador(4, 3))

// Escreva uma função que receba dois parâmetros. O primeiro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição.
// Um array será retornado.

function repetir(elemento, multiplicador = 0) {
  elemento = [elemento]

  while (multiplicador > 1) {
    elemento.push(elemento[0])
    multiplicador--
  }

  return elemento
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))

// Elabora uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

function simboloMais(multiplicador = 0) {
  saida = ""
  for (multiplicador; multiplicador > 0; multiplicador--) {
    saida += "+"
  }
  return saida
}

console.log(simboloMais(2))
console.log(simboloMais(4))

// Crie uma função que receba um array e retorne o primeiro e o último elemento desse array como um novo array.

function receberPrimeiroEUltimoElemento(array) {
  return [array[0], array[array.length - 1]]
}
console.log(receberPrimeiroEUltimoElemento([7, 14, "Olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))

/* Quando temos um objeto e manipulamos seus atributos, adcionando, atualizando ou removendo--os, estamos apenas modificando-o,mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações devido a referências a objetos.
Abaixo, está a descrição de uma dessas funções.

Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto.
Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro
*/
const obj = {
  id: 20,
  nome: "Caneta",
  descricao: "Não Preenchido",
}

function removerPropriedade(obj, prop) {
  const clone = structuredClone(arguments[0])
  delete clone[prop]
  return clone
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"))

console.log(
  removerPropriedade(
    {
      id: 20,
      nome: "Caneta",
      descricao: "Não Preenchido",
    },
    "descricao"
  )
)

const new_obj = removerPropriedade(obj, "descricao")

console.log(Object.is(new_obj, obj))

// Crie um função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro
function filtrarNumeros(list) {
  saida_arr = []
  for (i in list) {
    if (typeof list[i] === typeof 1998) {
      saida_arr.push(list[i])
    }
  }
  return saida_arr
}

console.log(filtrarNumeros(["Javascript", 1, "3", "web", 20]))

console.log(filtrarNumeros(["a", "c"]))

// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento.
function objetoParaArray(objeto) {
  return Object.entries(objeto)
}

console.log(
  objetoParaArray({ nome: "Maria", profissao: "Desenvolvedora de software" })
)
console.log(objetoParaArray({ codigo: 1111, preco: 12000 }))

function receberSomenteParesDosIndicesPares(lista) {
  let array = []
  for (n in lista) {
    if (!(n % 2)) if (!(lista[n] % 2)) array.push(lista[n])
  }
  // OPERADOR DE NEGAÇÃO VAI TRANSFORMAR O RESTO QUE É 0 EM 1 QUE SIGNIFICA VERDADEIRO.
  return array
}

console.log(receberSomenteParesDosIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteParesDosIndicesPares([10, 70, 22, 43]))

console.log(!(10 % 2))

// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se o anos bissextos, que têm 360 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se eles é múltiplo de 4.
// Não pode ser múltiplo de 100, exceto de for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

function checarAnoBissexto(ano) {
  if (ano % 4 === 0) {
    // se ano for divisvel por 4 entra nos ifs aninhads
    if (ano % 100 === 0) {
      // se ano for divisivel por 4,100 entra no if aninhado
      if (ano % 400 === 0) {
        // se ano for divisivel por 4,100,400
        return true
      }
      // se ano for divisivel por 4,100 mas nao por 400
      return false
    }
    // se ano for divisivel 4 e mais nada
    return true
  }
  // se ano nao for divisel por 4
  else return false
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))

// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array

function somarNumeros1(lista) {
  return lista.reduce(function (a, b) {
    return a + b
  })
}
const somarNumero2 = (lista) => lista.reduce((a, b) => a + b)

console.log(somarNumeros1([10, 10, 10]))
console.log(somarNumero2([15, 15, 15, 15]))

// Você está trabalhando numa solução pessoal de (controle de despesas.
// Na tela principal dessa aplicação, é possível adcionar produtos ou serviços, informando nome, categoria e preço.
// Uma funcionalidade que você está desenvolvendo no momento é a de somar o total de despesas.

// Crie uma função que receba um array de produtos e retorne o total de despesas.

function despesasTotais(array_de_objetos) {
  const precos = (p) => p.preco
  const soma_precos = (a, b) => a + b
  return array_de_objetos.map(precos).reduce(soma_precos)
}

console.log(
  despesasTotais([
    { nome: "Jornal Online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
  ])
)
console.log(
  despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
  ])
)

// Numa aplicação web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.

// Com o intuito de realizar o cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses número

function calcularMedia(valores) {
  return valores.reduce((a, b) => a + b) / valores.length
}
console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))

// Faça uma função que recebe a base e altura de um triângulo e retorne a área desse triângulo.
// A precisão deverá ser de duas casas decimais, arredondado se necessário.

// fórmula (base x altura) / 2

function areaDoTriangulo(b, h) {
  return ((b * h) / 2).toFixed(2)
}
console.log(areaDoTriangulo(10, 15))
console.log(areaDoTriangulo(7, 9))
console.log(areaDoTriangulo(9.25, 13.1))

// Criar uma função que receba um array de números e retorne o menor número desse array

function menorNumero(n) {
  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr
    }

    let pivot = arr[0]
    let leftArr = []
    let rightArr = []

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i])
      } else {
        rightArr.push(arr[i])
      }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
  }
  return quickSort(n)[0]
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))

// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10.
// A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente.
// Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X".
// Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
function funcaoDaSorte(escolha_do_usuario) {
  n_sorteado = Math.ceil(
    Math.random() *
      (escolha_do_usuario - escolha_do_usuario / 2 + escolha_do_usuario)
  )
  escolha_do_usuario = Number(escolha_do_usuario)
  return escolha_do_usuario === n_sorteado
    ? `Parbéns! O número sorteado foi o ${n_sorteado}`
    : `Que pena! O número sorteado foi o ${n_sorteado}.`
}

function contarPalavras(string) {
  return string.split(" ").length
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendedndo a programar"))

// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string.
// A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.
function contarCaractere(caractere, string) {
  const array_de_letras = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === caractere) {
      array_de_letras.push(string.slice(i, i + 1))
    }
  }
  return array_de_letras.length
}
console.log(contarCaractere("r", "a sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))

// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.
// Escreva uma funçãp que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings.
// A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

function buscarPalavrasSemelhantes(palavra, stringArr) {
  return stringArr.filter((word) => word.match(palavra))
}
console.log(
  buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
)

// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.
function removerVogal(string) {
  const regex = /[aeiou]/g
  return string.replaceAll(regex, "")
}

console.log(removerVogal("Cod3r"))
console.log(removerVogal("Fundamentos"))

// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que coresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas.
function inverter(objeto) {
  let objetoInvertido = {}
  for (const key in objeto) {
    if (Object.hasOwnProperty.call(objeto, key)) {
      const element = objeto[key]
      console.log(element, key)
      Object.assign(objetoInvertido, { [element]: key })
    }
  }
  return objetoInvertido
}

console.log(inverter({ a: 1, b: 2, c: 3 }))

teste = { a: 1, b: 2 }
