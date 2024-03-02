<template>
  <div class="px-4 py-5 my-0 text-center bg-light" id="mainHero">
    <!-- <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
    <h1 class="text-white display-5 fw-bold  ">
      Películas y series ilimitadas y mucho más</h1>
    <div class="col-lg-8 mx-auto text-white ">
      <h4 class="mb-4 fs-4 ">Disfruta donde quieras. Cancela cuando quieras.</h4>
      <p class="fw-semibold lead mb-3 fs-5">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu
        membresía de Netflix.</p>
      <div class="d-grid gap-1 d-sm-flex justify-content-sm-center">
        <div class="form-floating col-lg-4 col-md-6">
          <input type="email" class="form-control bg-dark p-2 text-white bg-opacity-50" id="floatingInputGrid"
            placeholder="name@example.com" value="">
          <label for="floatingInputGrid bg-success text-opacity-0">Email</label>
        </div>

        <ButtonComponent :msg="'Comenzar'" :arrow=true :bold=true class="col-lg-2 col-md-3 p-0 fs-5"></ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '../landing/ButtonComponent.vue';
</script>

<style scoped>
h1 {

  font-weight: 900 !important;

}
</style>