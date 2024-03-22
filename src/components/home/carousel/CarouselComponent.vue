<template>
  <div class="carousel-item">
    <div class="d-flex justify-content-center">
      <router-link
        :to="`/movie/${movie.id}`"
        style="max-height: 48vh"
        @click="setMovieId(movie.id)"
        @mouseover="esconder(index, movie.id)"
        @mouseleave="mostrar(index)"
        class="mx-1 bg-dark rounded-1 text-decoration-none"
        v-for="(movie, index) in data"
        :key="movie.id"
      >
        <img
          v-if="index !== hiddenIndex"
          class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 rounded-1"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="Placeholder:Image"
        />

        <div v-else class="card mh-100" style="width: 15vw">
          <iframe
            autoplay
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
            :src="`https://www.youtube.com/embed/${video.key}?autoplay=1&controls=0`"
            title="YouTube"
            frameborder="0"
            allow="accelerometer; autoplay"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">
              {{ movie.overview }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A second item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template> 

<script setup>
import { ref } from 'vue'
import { useMovieStore } from '@/stores/movie'
import axios from 'axios'
const movieStore = useMovieStore()
let movie = ref()
let video = ref()
defineProps({
  data: {
    required: true
  }
})

let hiddenIndex = ref(null)

const setMovieId = async (movieId) => {
  await movieStore.movieDetail(movieId)
  movie.value = movieStore.movie
  console.log(movie.value)
}

const searchVideo = async (movieId) => {
  // let apiKey = import.meta.env.VITE_API_KEY;
  let apiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ2YjI5MjU4NDBjZTkwYjlmNTczMzQzNmI2NTE0OSIsInN1YiI6IjY1Y2MzMzBhZTIxMDIzMDE2MmMyZWE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eOfjw7WYwQNvqvpfNEBaRMPGzq3hEOe7xStqPFV0ftA'

  let urlMovieVideo = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
  try {
    const response = await axios.get(urlMovieVideo, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })

    video.value = response.data.results[0] // Asignar todos los resultados al ref popular
    console.log(response.data.results[0])
  } catch (error) {
    console.error(error)
  }
}

const esconder = (index, movieId) => {
  hiddenIndex.value = index
  searchVideo(movieId)
}

const mostrar = () => {
  hiddenIndex.value = null
  video.value = null
}
</script>

<style scoped>
img {
  max-width: 15vw;
}

iframe {
  z-index: 100;
}
</style>
