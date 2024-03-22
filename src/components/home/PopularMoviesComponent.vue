<script setup>
import { useMoviesStore } from '@/stores/movies';
import CarouselComponent from './carousel/CarouselComponent.vue';
import { computed, onMounted, ref } from 'vue';

const moviesStore = useMoviesStore();
let popular = ref(null);

onMounted(async () => {
    await moviesStore.popularMovies();
    popular.value = moviesStore.popular;
});

const slicePopular = (start, end) => {
    return computed(() => popular.value ? popular.value.slice(start, end) : []);
};
const firstSixPopular = slicePopular(0, 6);
const secondSixPopular = slicePopular(6, 12);
const thirdSixPopular = slicePopular(12, 18);
const fourthSixPopular = slicePopular(18, 24);
const fifthSixPopular = slicePopular(24, 30);

</script>

<template>
    <!-- <h1 class="text-light">{{popular.value}}</h1> -->
    <div id="carousel1" class="carousel slide ">
        <h4 class="ms-5 ps-4 text-light">Populares</h4>
        <div class="carousel-inner">
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev"
                style="width: 50px;">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next"
                style="width: 50px;">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
          
            <CarouselComponent :data=firstSixPopular class="active"></CarouselComponent>
            <CarouselComponent :data=secondSixPopular></CarouselComponent>
            <CarouselComponent :data=thirdSixPopular></CarouselComponent>
            <CarouselComponent :data=fourthSixPopular></CarouselComponent>
            <CarouselComponent :data=fifthSixPopular></CarouselComponent>
        </div>

    </div>

</template>


<style>
@media (max-width: 800px) {

    h1,

    h4 {
        margin-left: 10px !important;
    }
}
</style>