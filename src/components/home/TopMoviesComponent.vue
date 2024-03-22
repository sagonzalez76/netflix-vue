<script setup>
import { useMoviesStore } from '@/stores/movies';
import CarouselComponent from './carousel/CarouselComponent.vue';

import { computed, onMounted, ref } from 'vue';

const moviesStore = useMoviesStore();
const top = ref(null);

onMounted(async () => {
    await moviesStore.topMovies();
    top.value = moviesStore.top;
});

const sliceTop = (start, end) => {
    return computed(() => top.value ? top.value.slice(start, end) : []);
};

const firstSixTop = sliceTop(0, 6);
const secondSixTop = sliceTop(6, 12);
const thirdSixTop = sliceTop(12, 18);
const fourthSixTop = sliceTop(18, 24);
const fifthSixTop = sliceTop(24, 30);
</script>

<template>
    <div id="carousel2" class="carousel slide ">
        <h4 class="ms-5 text-light">Top</h4>

        <div class="carousel-inner">
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev"
                style="width: 50px;">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next"
                style="width: 50px;">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <CarouselComponent :data=firstSixTop class="active"></CarouselComponent>
            <CarouselComponent :data=secondSixTop></CarouselComponent>
            <CarouselComponent :data=thirdSixTop></CarouselComponent>
            <CarouselComponent :data=fourthSixTop></CarouselComponent>
            <CarouselComponent :data=fifthSixTop></CarouselComponent>

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