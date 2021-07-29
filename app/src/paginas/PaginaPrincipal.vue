<template>
  <div id="corpo">
    <v-row>
      <v-col>
        <Status nome="Leticia" />
        <router-link to="/modificarleticia"
          ><v-btn color="#F6F6F6" block plain>Alterar</v-btn></router-link
        >
      </v-col>
      <v-col>
        <Status nome="Felipe" />
        <router-link to="/modificarfelipe"
          ><v-btn color="#F6F6F6" block plain>Alterar</v-btn></router-link
        >
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
};
</script>

<style>
#corpo {
  padding: 15px 8px;
}
</style>