<script setup>
import { useMoviesStore } from '@/stores/movies';
import CarouselComponent from './carousel/CarouselComponent.vue';

import { computed, onMounted, ref } from 'vue';

const moviesStore = useMoviesStore();
const upcoming = ref(null);

onMounted(async () => {
    await moviesStore.upcomingMovies();
    upcoming.value = moviesStore.upcoming;
});

const sliceUpcoming = (start, end) => {
    return computed(() => upcoming.value ? upcoming.value.slice(start, end) : []);
};

const firstSixUpcoming = sliceUpcoming(0, 6);
const secondSixUpcoming = sliceUpcoming(6, 12);
const thirdSixUpcoming = sliceUpcoming(12, 18);
const fourthSixUpcoming = sliceUpcoming(18, 24);
const fifthSixUpcoming = sliceUpcoming(24, 30);
</script>

<template>
    <div id="carousel3" class="carousel slide ">
        <h4 class="ms-5 text-light">Upcoming</h4>

        <div class="carousel-inner">
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev"
                style="width: 50px;">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next"
                style="width: 50px;">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <CarouselComponent :data=firstSixUpcoming class="active"></CarouselComponent>
            <CarouselComponent :data=secondSixUpcoming></CarouselComponent>
            <CarouselComponent :data=thirdSixUpcoming></CarouselComponent>
            <CarouselComponent :data=fourthSixUpcoming></CarouselComponent>
            <CarouselComponent :data=fifthSixUpcoming></CarouselComponent>

        </div>

    </div>

</template>


<style scoped>
@media (max-width: 800px) {

    h1,
    h2,
    h3,
    h4 {
        margin-left: 10px !important;
    }
}
</style>