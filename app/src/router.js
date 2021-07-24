import Vue from 'vue'
import Router from 'vue-router'

//Componentes que vão se renderizados e seus caminhos
import ModificarFelipe from "./paginas/ModificarFelipe"
import ModificarLeticia from "./paginas/ModificarLeticia"
import PaginaPrincipal from "./paginas/PaginaPrincipal"

Vue.use(Router)

export default new Router({
  routes: [
    //Caminho da url que vai acessar o componente e o componente que vai ser acessado 
    { path: '/', component: PaginaPrincipal },
    { path: '/modificarfelipe', component: ModificarFelipe },
    { path: '/modificarleticia', component: ModificarLeticia },
  ]
})

