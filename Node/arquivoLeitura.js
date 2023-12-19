const { error } = require("console")
const fs = require("fs")

const caminho = __dirname + "/arquivo.json"
// Síncrono
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// Assíncrono
fs.readFile(caminho, "utf-8", function (err, conteudo) {
  if (err) throw error
  const config = JSON.parse(conteudo)
  console.log(config.db.host + ":" + config.db.port)
})

const config = require("./arquivo.json")
console.log(config.db)

fs.readdir(__dirname, function (err, arquivos) {
  console.log("Conteúdo da pasta:", __dirname)
  console.log(arquivos)
})
