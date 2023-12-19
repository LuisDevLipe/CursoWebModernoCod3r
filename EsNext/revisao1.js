// let e const
{
    var VAR = "Escopo global"
    let LET = "Escopo de bloco"
    const CONST = "Escopo de bloco 'Imutável'"
    console.log(LET)
    console.log(CONST)
}
{
    console.log(VAR)
}

// Template String
const produto = "iPad"
console.log(
    `${produto} 
é 
caro!`
)

// Deestructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade:i, nome } = { nome: "Ana", idade: 9 }
console.log(i, nome)
