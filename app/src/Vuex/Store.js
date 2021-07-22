import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        estadoLeticia: "Livre",
        estadoFelipe : "Trabalhando"
    },
    getters: {
        getLeticia (state){
            return state.estadoLeticia
        },
        getFelipe (state){
            return state.estadoFelipe
        }
    }


})