var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const estados = {
    leticia: {
        estado: "",
        texto: "Letícia ainda não iniciou as atividades.",
    },
    felipe: {
        estado: "",
        texto: "Felipe ainda não iniciou as atividades.",
    },
}

const alteraEstado = function (pessoa, URLparam) {
    let parametros = URLparam.parametro.split("&")
    pessoa.estado = parametros[0]
    pessoa.texto = parametros[1]
}

//getters
app.get("/LeticiaStatus", (req, res) => res.json(estados.leticia))
app.get("/FelipeStatus", (req, res) => res.json(estados.felipe))

//setters
app.get("/Felipe/:parametro", (req, res) => {
    alteraEstado(estados.felipe, req.params)
    res.send("ok")
})
app.get("/Leticia/:parametro", (req, res) => {
    alteraEstado(estados.leticia, req.params)
    res.send("ok")
})

app.listen(8081, function () {
  console.log('Servidor que armazena dados funcionando.')
})