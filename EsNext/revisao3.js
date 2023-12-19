// ES8: Object.values, Objects.entries

const obj = { a: 2, b: 2, c: 3 }

console.log(Object.values(obj))

console.log(Object.entries(obj))

// Notação literal de objectos
const nome = "Carla"

const pessoa = {
    nome,
    ola() {
       return "Oi gente!" 
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class

class Animal{ }
class Cachorro extends Animal{
    falar() {
        return "Au au!"
    }
}

console.log(new Cachorro().falar())