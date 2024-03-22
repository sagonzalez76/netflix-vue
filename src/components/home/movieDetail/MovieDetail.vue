<template>
    <div class="movie-detail" v-if="movie">

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-4">
                    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="poster"
                        alt="Poster Image">
                </div>
                <div class="col-md-8">
                    <h2 class="title">{{ movie.title }}</h2>
                    <p class="overview">{{ movie.overview }}</p>
                    <div class="info">
                        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
                        <p><strong>Rating:</strong> {{ movie.vote_average }}</p>

                    </div>
                    <router-link to="/" class="btn btn-primary mt-3">Back to Home</router-link>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        Cargando...
    </div>

</template>

<script setup>

import { onMounted, ref } from "vue";
import { useMovieStore } from '@/stores/movie';

defineProps({
    // movie: {
    //     type: Object,
    //     required: true
    // }
})
const movieStore = useMovieStore();
let movie = ref()

onMounted(async () => {

    let movieId = localStorage.getItem('movieId');
    await movieStore.movieDetail(movieId);
    movie.value = movieStore.movie;
    console.log(movie.value);

})

</script>

<style scoped>
.movie-detail {
    /* Add styles for the detail container */
}

.backdrop {
    /* Styles for the backdrop image */
}

.poster {
    /* Styles for the poster image */
}

.title {
    /* Styles for the movie title */
}

.overview {
    /* Styles for the movie overview */
}

.info {
    /* Styles for additional movie information */
}
</style>