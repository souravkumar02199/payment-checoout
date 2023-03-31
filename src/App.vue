<template>


  <v-app class="fill-height">
    <v-container>
    <v-app-bar app color="#000034" dark>
      <!-- <div class="d-flex align-center">
        <h1>TodoList</h1>
      </div> -->
    </v-app-bar>
    <v-main  class="fill-height">
      <router-view/>
    </v-main>
    </v-container>
  </v-app>

</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage()
  }
};
</script>
