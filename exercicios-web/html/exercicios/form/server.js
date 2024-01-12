const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post("/usuarios", (req, res, next) => {
  console.log(req.body)
  res.send("<h1>Parabéns. Usuário Incluído.<h1/>")
})
app.post("/usuarios/:id", (req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send("<h1>Parabéns. Usuário Alterado!<h1/>")
  })
  
app.listen(3003)