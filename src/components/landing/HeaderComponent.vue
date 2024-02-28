<template>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center pt-2 mb-5 ">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">


                <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" class="img-fluid"
                    alt="netflix_logo">

            </a>
            <ul v-if="router" class="nav nav-pills">

                <li class="nav-item"> <button type="button" class="btn border dropdown-toggle py-1 mx-3 text-white"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-translate"></i> Language
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    </ul>
                </li>



                <li class="nav-item">

                    <RouterComponent :msg="'Iniciar Sesion'" :arrow="false" :bold="false"></RouterComponent>



                </li>
                <!-- <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>  -->
            </ul>
        </header>
    </div>
</template>

<script setup>
import RouterComponent from './RouterComponent.vue';

defineProps({
    router: {
        type: Boolean,
        required: true,
        default: true
    }
})

</script>


<style scoped>
img {
    height: 10vh;
}

.nav-pills {
    align-content: center;
}







</style>