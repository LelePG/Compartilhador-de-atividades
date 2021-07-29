var express = require('express')
var cors = require('cors')
var app = express()
var reload = require('reload')


app.use(cors())

const estados = {
        leticia:{
            estado: "",
            texto:"Letícia ainda não iniciou as atividades.",
        },
        felipe:{
            estado: "",
            texto:"Felipe ainda não iniciou as atividades.",
        },
    }
    // getters: {
    //     getEstado(state){
    //         if (state.modificar == "Letícia"){
    //             return state.leticia.estado
    //         }
    //         else if (state.modificar == "Felipe"){
    //             return state.felipe.estado
    //         }
    //     },
    //     getPessoa(state){
    //         return state.modificar
    //     },

    //     getTextoStatus(state){
    //         if (state.modificar == "Letícia"){
    //             return state.leticia.textoStatus
    //         }
    //         else if (state.modificar == "Felipe"){
    //             return state.felipe.textoStatus
    //         }
    //     }
    // },
    // mutations:{
    //     selecionarPessoa(state, nome){
    //         state.modificar = nome
    //     },
    //     mudaEstado(state, cor){
    //         if (state.modificar == "Letícia"){
    //            state.leticia.estado =cor
    //         }
    //         else if (state.modificar == "Felipe"){
    //            state.felipe.estado=cor
    //         }
    //     },
    //     alteraFraseStatus(state, frase){
    //         if (!frase){
    //             frase = "Não tenho o que dizer."
    //         }
    //         if (state.modificar == "Letícia"){
    //            state.leticia.textoStatus = "Letícia: "+ frase
    //         }
    //         else if (state.modificar == "Felipe"){
    //            state.felipe.textoStatus="Felipe: " +frase
    //         }
    //     },
        

    //}

const alteraEstado =function(pessoa,URLparam){
    let parametros = URLparam.parametro.split("&")
    pessoa.estado = parametros[0]
    pessoa.texto = parametros[1]
    console.log(parametros)
}
app.get('/teste', function (req, res, next) {
    console.log("ouviiii")
    res.json({"a":"FUNFEI"})
})

app.get("/LeticiaStatus", (req,res)=>res.json(estados.leticia))
app.get("/FelipeStatus", (req,res)=>res.json(estados.felipe))

app.get("/Felipe/:parametro",(req,res)=> {
    alteraEstado(estados.felipe,req.params)
    res.send("ok")
})
app.get("/Leticia/:parametro",(req,res)=> {alteraEstado(estados.leticia,req.params)
res.send("ok")
})


reload(app).then(function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README
  
    // Reload started, start web server
    app.listen(8081, function () {
      console.log('Web server listening on port 8081' )
    })
  }).catch(function (err) {
    console.error('Reload could not start, could not start server/sample app', err)
  })
// app.listen(8081, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })