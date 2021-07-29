<template>
  <div id = "corpo">
    <v-row>
      <v-col>
        <Status nome= "Leticia"  />
        <router-link to= "/modificarleticia"><v-btn color="#F6F6F6" block plain>Alterar</v-btn></router-link>
      </v-col>
      <v-col>
        <Status nome = "Felipe" />
        <router-link to= "/modificarfelipe"><v-btn color="#F6F6F6" block plain>Alterar</v-btn></router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Status from "../components/Status.vue";
export default {
  data: function(){
    return {
      leticia:{
        nome: "Leticia",
            estado: "",
            texto:"Letícia ainda não iniciou as atividades.",
        },
        felipe:{
          nome:"Felipe",
            estado: "",
            texto:"Felipe ainda não iniciou as atividades.",
        },
    }
  },
  components: {
    Status,
  },
  methods:{
   atualizaStatus(pessoa) {
      fetch(`http://localhost:8081/${pessoa.nome}Status`)
      .then(res=>res.json())
      .then(obj => {
        //console.log(obj)
        pessoa.texto = obj.texto
        pessoa.estado = obj.estado
        console.log(pessoa)
        return pessoa
      })
   },
   atualizaStatusLeticia(){
     let teste = this.atualizaStatus(this.leticia)
    console.log(teste)
    //this.leticia = teste
   },
   atualizaStatusFelipe(){
     fetch(`http://localhost:8081/${this.felipe.nome}Status`)
      .then(res=>res.json())
      .then(obj => {
        //console.log(obj)
        this.felipe.texto = obj.texto
        this.felipe.estado = obj.estado
        
      })
   },
   debug(){
     console.log(this.leticia, this.felipe)
   }
  }
};
</script>

<style>
#corpo {
  padding: 15px 8px;
}
</style>