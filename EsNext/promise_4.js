function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    ;[min, max] = [max, min]
  }
  return new Promise((resolve) => {
    setTimeout(function () {
      const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
      resolve(aleatorio)
    }, tempo)
  })
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 10, 4000),
    gerarNumerosEntre(1, 10, 1000),
    gerarNumerosEntre(1, 10, 300),
    gerarNumerosEntre(1, 10, 2000),
    gerarNumerosEntre(1, 10, 100),
  ])
}

console.time("promise")

gerarVariosNumeros()
  .then(console.log)
  .then(() => {
    console.timeLog("promise")
    console.timeEnd("promise")
  })
