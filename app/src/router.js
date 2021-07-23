import Vue from 'vue'
import Router from 'vue-router'
import ModificarFelipe from "./paginas/ModificarFelipe"

Vue.use(Router)

export default new Router({
     routes: [
//         //{ path: '../paginas/PaginaPrincipal.vue', component: PaginaPrincipal },
         { path: '/modificarfelipe', component: ModificarFelipe }
//         //{ path: '../paginas/ModificaLeticia.vue', component: ModificaLeticia },
    
       ] 
 })

