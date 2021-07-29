<template>
  <v-card :class="estado" min-height="90px">
    <h2>{{texto}}</h2>
    <p id = "textoEstado">{{estado}}</p>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
//import {mapMutaions} from 'vuex'
export default {
  data:function(){
    return {
    estado: "",
    texto: `${this.nome} ainda não iniciou as atividades.`
    }
  },
  created:function(){
     fetch(`http://192.168.0.108:8081/${this.nome}Status`)
      .then(res=>res.json())
      .then(obj => {
        //console.log(obj)
        this.texto = obj.texto
        this.estado = obj.estado
      })
  },
  computed:{
    ...mapGetters['getAtualizar']
  },
  props: {
    nome: {
      type: String,
      required: true,
    },
  },
  methods: {
    atualizaStatus() {
      fetch(`http://192.168.0.108:8081/${this.nome}Status`)
      .then(res=>res.json())
      .then(obj => {
        //console.log(obj)
        this.texto = obj.texto
        this.estado = obj.estado
      })},
   debug(){
     //console.log("status" +this.nome,this.estado,this.texto)
   }
  //console.log(resposta)
      //.then(respostaFormatada => console.log(respostaFormatada))
      // this.$store.commit("selecionarPessoa", this.nome);
      // this.texto = this.getTextoStatus
      // return this.getEstado
  
  },
};
</script>

<style>

.reuniao{
  background-color: #8F8F8F !important;
  color: #F6F6F6 !important; 
}
.estudando {
 background-color: #666666 !important;
  color: #F6F6F6 !important; 
}
.trabalhando {
  background-color: #B90504 !important;
  color: #F6F6F6 !important; 
}
.livre{
 background-color: #FF5C5C !important;
  color: #F6F6F6 !important; 
}
h2{
  text-align: center;
}
p#textoEstado{
  margin-top:30px;
  text-align: center;
}
</style>