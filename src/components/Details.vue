<template>
  <div class="details"
    :style="{ background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(http://image.tmdb.org/t/p/original' + movie.backdrop_path + ')' }">
    <div>
      <router-link to="/" class="link">Ana Sayfaya Dön</router-link>
      <div  class="title">
        <h1>{{ movie.original_title }}</h1>
      </div>
      <div class="vote">
        <p>Ortalama Oy: {{movie.vote_average}}</p>
        <p>Toplam Oy: {{movie.vote_count}}</p>
        <p>Popülerlik: {{movie.popularity}}</p>
      </div>
      <div class="text">
        <p>{{ movie.overview }}</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Details",
    created() {
      this.$store.dispatch('fetchMovie', this.id)
        .then((data) => {
          this.movie = data
        })
    },
    data() {
      return {
        id: this.$route.params.id,
        movie: {}
      };
    }
  };
</script>

<style scoped>
  .details {
    height: 100vh;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
    background-attachment: fixed !important;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: whitesmoke;
    padding-left: 10%;
    padding-right: 10%;
  }
  .title{
      font-size: 35px;
      font-weight: 100;
  }
  .vote{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;

  }
  .link{
    text-decoration: none;
    font-size: 24px;
    color: rgb(182, 182, 182);
  }
  .text{
    text-align: left;
    font-size: 24px;
  }
</style>