var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const estados = {
        leticia:{
            estado: "trabalhando",
            texto:"AAAAALetícia ainda não iniciou as atividades.",
        },
        felipe:{
            estado: "livre",
            texto:"BBBBcccccFelipe ainda não iniciou as atividades.",
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


app.get('/teste', function (req, res, next) {
    console.log("ouviiii")
    res.json({"a":"FUNFEI"})
})

app.get("/LeticiaStatus", (req,res)=>res.json(estados.leticia))
app.get("/FelipeStatus", (req,res)=>res.json(estados.felipe))


app.listen(8081, function () {
  console.log('CORS-enabled web server listening on port 80')
})