<template>
  <div class="container">
    <router-link :to="item.id.toString()" v-for="item in getMovies" :key="item.id" class="img">
      <MovieCard :movie="item" class="img"/>
    </router-link>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex"
  import MovieCard from "../components/MovieCard.vue"

export default {
    name: 'home',
    components: {
      MovieCard
    },
    computed: {
      ...mapGetters(['getMovies'])
    },
  }
</script>
<style>
  .container {
    padding-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }

  .img>img {
    width: 80%;
    height: 100%;
  }
</style>