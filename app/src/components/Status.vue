<template>
  <v-card :class="estado" @click = "debug" min-height="90px">
    <h2>{{texto}}</h2>
    <p id = "textoEstado">{{estado}}</p>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getEstado", "getTextoStatus"]),
  },
  methods: {
    ...mapMutations(["selecionarPessoa"]),
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