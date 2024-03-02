<template>
  <header class="p-2 mb-0 bg-oppacity-0">
    <div class="margin mx-2">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 me-lg-2 link-body-emphasis text-decoration-none">
          <img class="img-fluid" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt=""
            srcset="">
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link text-light px-2 link-secondary">Inicio</router-link></li>
          <li><router-link to="/" class="nav-link text-light px-2 link-secondary">Series</router-link></li>
          <li><router-link to="/" class="nav-link text-light px-2 link-secondary">Peliculas</router-link></li>
          <li><router-link to="/" class="nav-link text-light px-2 link-secondary">Novedades populares</router-link></li>
          <li><router-link to="/" class="nav-link text-light px-2 link-secondary">Mi lista</router-link></li>
          <li><router-link to="/" class="nav-link text-light px-2 link-secondary">Explora por idiomas</router-link></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 text-center" role="search">
          <div class="input-group flex-nowrap d-none border" ref="searchBar">
            <span class="input-group-text bg-dark border-0" id="addon-wrapping"> <i class="bi bi-search"
                style="color: aliceblue;"></i></span>
            <input type="text" class="form-control bg-dark text-light border-0" placeholder="Peliculas, personas, generos"
              aria-label="Username" aria-describedby="addon-wrapping">
          </div>
          <button @click.prevent="showSearchBar" class="bg-transparent border-0" ref="buttonSearch">
            <i class="bi bi-search" style="color: aliceblue;"></i>
          </button>
        </form>
        <div class="dropdown text-end d-flex align-items-center">
          <router-link to="" class="d-block link-body-emphasis text-decoration-none me-3" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="bi bi-bell" style="color: aliceblue;"></i>
          </router-link>
          <router-link to="" class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </router-link>
          <ul class="dropdown-menu text-small">
            <li><router-link to="" class="dropdown-item" href="#">New project...</router-link></li>
            <li><router-link to="" class="dropdown-item" href="#">Settings</router-link></li>
            <li><router-link to="" class="dropdown-item" href="#">Profile</router-link></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><router-link to="" class="dropdown-item" href="#">Sign out</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';


const searchBar = ref(null);
const buttonSearch = ref(null)

const showSearchBar = () => {
  if (searchBar.value) {
    searchBar.value.classList.remove('d-none');

    buttonSearch.value.classList.add('d-none');
  }

};


defineProps({
  router: {
    type: Boolean,
    required: true,
    default: true
  }
})

</script>


<style scoped>
.img-fluid {
  height: 3.5rem;
}

input::placeholder {
  color: white;
  opacity: 0.7;
  /* Ajusta la opacidad según lo desees */
}

.input-group {

  box-shadow: 0px 0px 5px .4px rgb(255, 255, 255);
  background-color: black;
  min-width: 300px;
}


@media screen and (min-width: 1440px) {
  .margin {
    background-color: rgba(194, 152, 152, 0);
    margin-inline: 10px;
  }
}
</style>