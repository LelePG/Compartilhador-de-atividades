<template>
<v-card id = "corpo" color="#333333">
    <v-row>
      <v-col>
    <Atividades/>
      </v-col>
      <v-col>
    <Atividades>
      <input type="radio" id="trabalhando" name="estado" value="trabalhando" />
    <label for="trabalhando">Trabalhando</label><br />
    </Atividades> 
      </v-col>
    </v-row>
</v-card>
</template>

<script>
import Atividades from './Atividades.vue'
export default {
    components:{
      Atividades
    }
}
</script>

<style>
#corpo{
  padding: 10px 8px;
}
</style>