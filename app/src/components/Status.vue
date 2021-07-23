<template>
    <v-card @click= teste min-height = "90px">
        <h1>Insira o texto de teste aqui</h1>
    </v-card>
</template>

<script>
// import {mapGetters} from 'vuex'

export default {
      props: {
    nome: {
      type: String,
      required: true,
    },
    },
//    computed:{
//      ...mapGetters([
//        'getEstado'])
//    },
    methods:{
      teste: function(){
        console.log(this.$store.getters.getEstado)
       // console.log(this.getFelipe)
      },
      getStatus(){
        //   let estado
        //   if (this.nome=="Letícia"){
        //       estado= this.getLeticia
        //   }
        //   else if (this.nome == "Felipe"){
        //       estado= this.getFelipe
        //   }
        //   console.log(estado)
        //   return estado
      }
    },
   
}
</script>

<style>
.livre{
    background-color: green !important;
}
.estudando{
    background-color: deeppink !important;
}
.trabalhando{
    background-color: blue !important;
}
</style>