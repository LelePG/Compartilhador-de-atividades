<template>
  <div id="app">
    <Cabecalho/>
    <br/>
    <Corpo/>
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho.vue'
import Corpo from './components/Corpo.vue'

export default {
  name: 'App',
  components: {
    Cabecalho,
    Corpo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



</style>
