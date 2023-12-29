const tecnologia = new Map()
tecnologia.set("react", { framework: false })
tecnologia.set("angular", { framework: true })
console.log(tecnologia.react)
console.log(tecnologia.get("react"))

const chavesVariadas = new Map([
  [function () {}, "texto"],
  [{}, "Objeto"],
  [123, "Número"],
])
chavesVariadas.forEach((v1, ch) => {
  console.log(ch, v1)
})

console.log(chavesVariadas.has(123))

chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

console.log(chavesVariadas.set(123, "a"))
console.log(chavesVariadas.set(123, "b"))
console.log(chavesVariadas.set(456, "b"))
console.log(chavesVariadas)
