<template>
  <router-view/>
</template>
<script>
export default {
  name:'app',
    created(){
    this.$store.dispatch('fetchMovies');
  },
}
</script>
<style>
body {
  background-color: #30243b;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
