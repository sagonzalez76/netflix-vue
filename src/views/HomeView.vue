<script setup>
import HeaderComponent from '@/components/home/HeaderHomeComponent.vue';
import MainHeroComponent from '@/components/home/MainHeroComponent.vue';
import CarouselMoviesComponent from '@/components/home/CarouselMoviesComponent.vue';

import { useMoviesStore } from '@/stores/movies'
import { onMounted, ref } from 'vue';

let moviesStore = useMoviesStore()
let popular = ref(null); // Inicializa como null


onMounted(async () => {
    await moviesStore.popularMovies()
    console.log(moviesStore.popular);
    popular.value = moviesStore.popular // Actualizamos la variable local `popular`

})


</script>

<template>
    <main class="">
        <section class="mb-5" id="firstHero">
            <HeaderComponent :router="true" class="component-header"></HeaderComponent>
            <CarouselMoviesComponent :movies="popular"></CarouselMoviesComponent>
            <!-- <MainHeroComponent></MainHeroComponent> -->
        </section>

        <!-- <section class="">
            <SecondaryHeroComponent></SecondaryHeroComponent>
            <TertiaryHeroComponent></TertiaryHeroComponent>
            <CuaternaryHeroComponent></CuaternaryHeroComponent>
        </section> -->
        <section class="">
            <!-- <FooterComponent></FooterComponent> -->
        </section>



    </main>
</template>


<style scoped>
main {
    background-color: rgb(167, 83, 83);
}

#firstHero {
    min-height: 90vh;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    /* background-image: url("https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1-1536x864.jpg");
    background-size: cover;
    background-position: center;
    box-shadow: inset 10px 0px 5rem 20rem rgba(0, 0, 0, 0.571),
        inset 0px 3rem 100px 1px rgb(0, 0, 0),
        inset 0px -2rem 200px 10px rgb(0, 0, 0); */
    /* Ajusta el desenfoque vertical (5rem) según sea necesario */
    /* Sombra negra con desenfoque */
    opacity: 0.9;
    /* Opacidad de la imagen de fondo */
    z-index: -2;
    /* Colocar el pseudo-elemento detrás del contenido del cuerpo */
}


.component-header {
    min-height: 10vh;
}

.component-header {
    max-height: 90vh;
}
</style>