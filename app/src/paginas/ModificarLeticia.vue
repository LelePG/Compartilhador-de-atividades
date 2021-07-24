<template>
<div id="mostraAtividades">
    <v-col>
    <Atividades nome="Letícia">
      <v-radio
        label="Trabalhando"
        name="trabalhando"
        color="#990100"
        value="trabalhando"
      ></v-radio>
    </Atividades>
    </v-col>
</div>
</template>


<script>
import Atividades from "../components/Atividades.vue";
export default{
    components:{
        Atividades
    }
}
</script>

<style>
#mostraAtividades{
    min-height: 180px;
}
</style>