<template>
  <div id="app">
      <h1>Pokaz zdjeć</h1>

      <router-view :images="images" ></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  props:{
    endpoint:String
  },
  data(){
    return{
      images:[],

    }
  },
  components: {
    
  },
  created()
  {
    axios.get(this.endpoint)
        .then(res => this.images=res.data);
  } 
}

</script>

<style>

</style>
