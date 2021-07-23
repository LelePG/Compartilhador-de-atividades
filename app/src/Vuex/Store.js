import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        estadoLeticia: "livre",
        estadoFelipe : "trabalhando"
    },
    getters: {
        getLeticia (state){
            return state.estadoLeticia
        },
        getFelipe (state){
            return state.estadoFelipe
        }
    },
    mutations:{
        mudaEstadoLeticia(state, cor){
            state.estadoLeticia = cor
        },
        mudaEstadoFelipe (state, cor){
            state.estadoFelipe = cor
        }

    }


})