console.log(typeof Array, typeof new Array(), typeof [])
let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo"
aprovados.push("Abia")
console.log(aprovados.length)

aprovados[9] = "Rafael"
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 2, "Elemetno1", "Elemento2")
// primeiro parametro o indice a partir de qual será feito o método de corte do array
// segundo parâmetro quantos elementos serão cortados, pode ser 0 que não cortará nenhum elemento
//  Outros parâmetros serão adcionados ao array a partir do indice do recorte

console.log(aprovados)
