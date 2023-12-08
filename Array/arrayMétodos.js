const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]

pilotos.pop() // remove o último do array
console.log(pilotos)

pilotos.push("Verstappen") // adciona no final
console.log(pilotos)

pilotos.shift() // remove o primeito do array
console.log(pilotos)

pilotos.unshift("Hamilton") // adciona no início do array
console.log(pilotos)

// splice pode adcionar e remover elementos

// adcionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

// slice
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

// parâmetros semelhantes ao splice
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
