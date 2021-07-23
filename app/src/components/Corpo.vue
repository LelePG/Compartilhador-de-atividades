<template>
  <v-card id="corpo" color="#333333">
    <BlocoInfo nome="Felipe" />

    <BlocoInfo nome="Letícia">
      <v-radio
        label="Trabalhando"
        name="trabalhando"
        color="#990100"
        value="trabalhando"
      ></v-radio>
    </BlocoInfo>
  </v-card>
</template>

<script>
import BlocoInfo from "./BlocoInfo.vue";
export default {
  components: {
    BlocoInfo,
  },
};
</script>

<style>
#corpo {
  padding: 15px 8px;
}
</style>