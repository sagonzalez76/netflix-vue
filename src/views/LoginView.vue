<script setup>
import FooterComponent from '@/components/landing/FooterComponent.vue';
import HeaderComponent from '@/components/landing/HeaderComponent.vue';
import LoginFormComponent from '@/components/login/LoginFormComponent.vue';
// import SecondaryHeroComponent from '@/components/landing/SecondaryHeroComponent.vue';
// import TertiaryHeroComponent from '@/components/landing/TertiaryHeroComponent.vue';
// import CuaternaryHeroComponent from '@/components/landing/CuaternaryHeroComponent.vue';
// import FooterComponent from '@/components/landing/FooterComponent.vue';
</script>

<template>
    <main class="">
        <section class="mb-5" id="firstHero">
            <HeaderComponent :router="false" class="component-header"></HeaderComponent>
            <LoginFormComponent class="component-body"></LoginFormComponent>
        </section>

        <!-- <section class="">
            <SecondaryHeroComponent></SecondaryHeroComponent>
            <TertiaryHeroComponent></TertiaryHeroComponent>
            <CuaternaryHeroComponent></CuaternaryHeroComponent>
        </section> -->
        <section class="">
            <FooterComponent></FooterComponent>
        </section>



    </main>
</template>


<style scoped>
main {
    background-color: black;
}

#firstHero {
    min-height: 90vh;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-image: url("https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1-1536x864.jpg");
    background-size: cover;
    background-position: center;
    box-shadow: inset 10px 0px 5rem 20rem rgba(0, 0, 0, 0.571),
        inset 0px 3rem 100px 1px rgb(0, 0, 0),
        inset 0px -2rem 200px 10px rgb(0, 0, 0);
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