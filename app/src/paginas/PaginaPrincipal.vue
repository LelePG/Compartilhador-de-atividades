<template>
  <div id = "corpo">
    <v-row>
      <v-col>
        <Status nome="Letícia" />
        <router-link to= "/modificarleticia"><v-btn color="#F6F6F6" block plain>Alterar</v-btn></router-link>
      </v-col>
      <v-col>
        <Status nome="Felipe" />
        <router-link to= "/modificarfelipe"><v-btn color="#F6F6F6" @click = "requisita" block plain>Alterar</v-btn></router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Status from "../components/Status.vue";
export default {
  components: {
    Status,
  },
  methods:{
    requisita: function(){
      fetch("http://localhost:8081/teste").then(()=>console.log("VORTEI"))
    }
  }
};
</script>

<style>
#corpo {
  padding: 15px 8px;
}
</style>