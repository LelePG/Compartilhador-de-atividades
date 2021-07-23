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
    methods: {
        getEstado(state){
            if (this.modificar == "Letícia"){
                return state.estadoLeticia
            }
            else if (this.modificar == "Felipe"){
                return state.estadoFelipe
            }
        }
    },
    mutations:{
        selecionarPessoa(state, nome){
            this.modificar = nome// esse é um atributo que eu quero modificar globalmente, por isso o this.
        },
        mudaEstado(state, cor){
            if (this.modificar == "Letícia"){
               state.estadoLeticia =cor
            }
            else if (this.modificar == "Felipe"){
               state.estadoFelipe =cor
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