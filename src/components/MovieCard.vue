<template>
    <div class="movieCard">
        <img :src="'https://image.tmdb.org/t/p/w500' + this.movie.poster_path" alt="" class="child">        
    </div>

</template>
<script>
export default {
    name:'movieCard',
    props:['movie'],
}
</script>