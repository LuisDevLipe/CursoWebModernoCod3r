const anonimo = process.argv.indexOf("-a") !== -1

console.log(anonimo)

if (anonimo) {
  process.stdout.write("Fala Anônimo!\n")
  process.exit()
} else {
  process.stdout.write("Informe o seu nome: ")
  process.stdin.on("data", function (data) {
    const nome = data.toString().replace("\n", "")
    process.stdout.write(`Fala ${nome} !!\n`)
    process.exit()
  })
}
