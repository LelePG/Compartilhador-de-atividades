import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        leticia:{
            nome: "Letícia",
            estado: "",
            textoStatus:"Letícia ainda não iniciou as atividades.",
        },
        felipe:{
            nome: "Felipe",
            estado: "",
            textoStatus:"Felipe ainda não iniciou as atividades.",
        },
        modificar: ""
    },
    getters: {
        getEstado(state){
            if (state.modificar == "Letícia"){
                return state.leticia.estado
            }
            else if (state.modificar == "Felipe"){
                return state.felipe.estado
            }
        },
        getPessoa(state){
            return state.modificar
        },

        getTextoStatus(state){
            if (state.modificar == "Letícia"){
                return state.leticia.textoStatus
            }
            else if (state.modificar == "Felipe"){
                return state.felipe.textoStatus
            }
        }
    },
    mutations:{
        selecionarPessoa(state, nome){
            state.modificar = nome
        },
        mudaEstado(state, cor){
            if (state.modificar == "Letícia"){
               state.leticia.estado =cor
            }
            else if (state.modificar == "Felipe"){
               state.felipe.estado=cor
            }
        },
        alteraFraseStatus(state, frase){
            if (!frase){
                frase = "Não tenho o que dizer."
            }
            if (state.modificar == "Letícia"){
               state.leticia.textoStatus = "Letícia: "+ frase
            }
            else if (state.modificar == "Felipe"){
               state.felipe.textoStatus="Felipe: " +frase
            }
        },
        

    }


})