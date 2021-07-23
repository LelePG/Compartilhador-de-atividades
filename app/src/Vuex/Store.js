import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        leticia:{
            nome: "Letícia",
            estado: "livre"
        },
        felipe:{
            nome: "Felipe",
            estado: "estudando"
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
        mudaEstadoLeticia(state, cor){
            state.estadoLeticia = cor
        },
        mudaEstadoFelipe (state, cor){
            state.estadoFelipe = cor
        }

    }


})