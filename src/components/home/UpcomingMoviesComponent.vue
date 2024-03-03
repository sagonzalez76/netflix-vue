<script setup>
import { useMoviesStore } from '@/stores/movies';
import { computed, onMounted, ref } from 'vue';

const moviesStore = useMoviesStore();
const upcoming = ref(null);

onMounted(async () => {
    await moviesStore.upcomingMovies();
    upcoming.value = moviesStore.upcoming.results;
});

const sliceUpcoming = (start, end) => {
    return computed(() => upcoming.value ? upcoming.value.slice(start, end) : []);
};

const firstFiveUpcoming = sliceUpcoming(0, 5);
const secondFiveUpcoming = sliceUpcoming(5, 10);
const thirdFiveUpcoming = sliceUpcoming(10, 15);
const fourthFiveUpcoming = sliceUpcoming(15, 20);

</script>

<template>

    <div id="carousel3" class="carousel slide">
        <h4 class="ms-5 text-light">Proximamente</h4>
        <div class="carousel-inner">
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev"
                style="width: 4vw;">
                <span class="carousel-control-prev-icon" style="max-width: 4vw;" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next"
                style="width: 4vw;">
                <span class="carousel-control-next-icon" style="max-width: 4vw;" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div class="carousel-item active ">
                <div class="">
                    <div class="d-flex justify-content-center">

                        <router-link to="/" class="mx-1 bg-dark rounded-1 text-decoration-none"
                            v-for="pop in firstFiveUpcoming" :key="pop.id">
                            <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 rounded-1 "
                                style=" max-width: 18vw;  "
                                :src="`https://image.tmdb.org/t/p/w500/${pop.backdrop_path}`"
                                alt="Placeholder: First slide">
                            <!-- <div class="text">
                                <h6 class="text-center text-light text fs-6" style="max-width:30ch;">{{ pop.title }}
                                </h6>
                            </div> -->
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="">
                    <div class="d-flex justify-content-center">
                        <router-link to="/" class="mx-1 bg-dark rounded-1 text-decoration-none"
                            v-for="pop in secondFiveUpcoming" :key="pop.id">
                            <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 rounded-1 "
                                style="max-width: 18vw;" :src="`https://image.tmdb.org/t/p/w500/${pop.backdrop_path}`"
                                alt="Placeholder: First slide">
                            <!-- <div class="text">
                                <h6 class="text-center text-light text fs-6" style="max-width:30ch;">{{ pop.title }}
                                </h6>
                            </div> -->
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="">
                    <div class="d-flex justify-content-center">
                        <router-link to="/" class="mx-1 bg-dark rounded-1 text-decoration-none"
                            v-for="pop in thirdFiveUpcoming" :key="pop.id">
                            <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 rounded-1 "
                                style="max-width: 18vw;" :src="`https://image.tmdb.org/t/p/w500/${pop.backdrop_path}`"
                                alt="Placeholder: First slide">
                            <!-- <div class="text">
                                <h6 class="text-center text-light text fs-6" style="max-width:30ch;">{{ pop.title }}
                                </h6>
                            </div> -->
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="">
                    <div class="d-flex justify-content-center">
                        <router-link to="/" class="mx-1 bg-dark rounded-1 text-decoration-none"
                            v-for="pop in fourthFiveUpcoming" :key="pop.id">
                            <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 rounded-1 "
                                style="max-width: 18vw;" :src="`https://image.tmdb.org/t/p/w500/${pop.backdrop_path}`"
                                alt="Placeholder: First slide">
                            <!-- <div class="text">
                                <h6 class="text-center text-light text fs-6" style="max-width:30ch;">{{ pop.title }}
                                </h6>
                            </div> -->
                        </router-link>
                    </div>
                </div>
            </div>

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