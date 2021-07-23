<template>
  <div id = "corpo">
    <v-row>
      <v-col>
        <Status nome="Letícia" />
        <v-btn color="#F6F6F6" block plain>Alterar</v-btn>
      </v-col>
      <v-col>
        <Status nome="Felipe" />
        <v-btn color="#F6F6F6" plain block>Alterar</v-btn>
      </v-col>
    </v-row>
    <router-link to= "/modificarfelipe">AAA</router-link>
  </div>
</template>

<script>
import Status from "../components/Status.vue";
export default {
  components: {
    Status,
  },
};
</script>

<style>
#corpo {
  padding: 15px 8px;
}
</style>