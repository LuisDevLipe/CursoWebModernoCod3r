function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro!!!")
    } else {
      resolve(valor)
    }
  })
}
funcionarOuNao("Testando...", 0.1)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => console.log(v),
    (err) => console.log(`Erro Esp.: ${err}`)
  )
  .catch(console.error)
  .then(() => console.log("Fim"))
