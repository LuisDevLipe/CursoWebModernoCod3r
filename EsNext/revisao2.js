// Arrow function
const soma = (a, b) => a + b

// function soma(a, b){
//     return a+b
// }

console.log(soma(2, 3))

// Arrow function (this)

const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


// parâmetro default

function log(texto = "Node") {
    console.log(texto)
}

log("Sou mais forte")

// operador rest

function total(...numeros) {
    return numeros.reduce((acc, total) => acc + total)
}

console.log(total(2, 3, 4, 5))
