function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()

// Ao criar um objeto através de uma função construtora
// o __proto__ aponta para a função construtora funcao.protoype
console.log(obj1.__proto__ === obj2.__proto__)

console.log(MeuObjeto.prototype === obj1.__proto__)

// Quando um objeto é criado através de Object.create()
// __proto__ aponta para Object.prototype por padrão

MeuObjeto.prototype.nome = "Anônimo"
MeuObjeto.prototype.falar = function () {
  console.log("bom dia! meu nome é ", this.nome)
}

obj1.falar()
obj2.nome = "Rafael"
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = "Obj3"
obj3.falar()

// Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

