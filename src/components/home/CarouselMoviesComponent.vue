<template>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="movie in movies.results" :key="movie.id" class="carousel-item active">
                <h1>
                    {{ movie.title }} </h1>
                <img src="..." class="d-block w-100" alt="...">
            </div>

            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
            </div>

            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <h1>
        <!-- {{ movies }} -->
    </h1>
</template>

<script setup>

defineProps({
    movies: {
        required: true,
    }
})



</script>

<style scoped ></style>