import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    apiLink:"https://api.themoviedb.org/3/discover/movie?api_key=43ce4c9dbe662eb81f48632317205a5a&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",
    movies:[],
    apiKey:'43ce4c9dbe662eb81f48632317205a5a'
  },
  mutations: {
    setMovies(state, payload){
      state.movies = payload
    }
  },
  getters:{
    getMovies(state){
      return state.movies
    }
  },
  actions: {
    fetchMovies({state, commit}){
      axios.get(state.apiLink)
      .then((response) => {
        commit('setMovies', response.data.results)
        console.log(state.movies)

      });
    },
    fetchMovie({state}, id){
      return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${state.apiKey}&language=tr-TR`)
        .then(data => data.json())
    }
  },
  modules: {
  }
})
