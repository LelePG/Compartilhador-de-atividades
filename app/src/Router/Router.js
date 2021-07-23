import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '../paginas/PaginaPrincipal.vue', component: PaginaPrincipal },
    { path: '../paginas/ModificaFelipe.vue', component: ModificaFelipe },
    { path: '../paginas/ModificaLeticia.vue', component: ModificaLeticia },

  ]

export const router = new VueRouter({
    routes 
})