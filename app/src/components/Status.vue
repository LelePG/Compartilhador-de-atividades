<template>
    <v-card @click="teste" min-height = "90px">
        <h1>Insira o texto de teste aqui</h1>
    </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   computed:{
     ...mapGetters([
       'getLeticia',
       'getFelipe'])
   },
    methods:{
      teste: function(){
        console.log(this.getLeticia)
        console.log(this.getFelipe)
      }
    }
}
</script>

<style>
.livre{
    background-color: green;
}
.estudando{
    background-color: deeppink;
}
.trabalhando{
    background-color: blue;
}
</style>