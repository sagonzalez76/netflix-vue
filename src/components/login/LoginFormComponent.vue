<template>
  <section class="">
    <div class="row d-flex justify-content-center" style="width:99vw">

      <div class=" d-flex justify-content-center col-lg-8 col-sm-12 card login-background text-light bg-opacity-50 p-5"
        style="max-width: 500px;">
        <h2 class="card-header w-75">Sign In</h2>
        <div class="card-body">

          <form action="" class="w-100">

            <div class="form-floating mb-3 ">
              <input type="email" class="form-control bg-input border-0 text-light" id="floatingInput"
                placeholder="name@example.com">
              <label for="floatingInput text-light">Email or phone number</label>
            </div>

            <div class="form-floating mb-3">
              <input type="password" class="form-control bg-input  border-0" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>


            <RouterComponent to="/pin" msg="Sign In" class="w-100"></RouterComponent>

            <div class="d-flex justify-content-between">


              <div class="form-check pt-1">
                <input class="form-check-input bg-secondary" type="checkbox" value="false" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                  Remember Me
                </label>



              </div>
              <router-link class="nav-link" to="/"> Need help?</router-link>
            </div>

          </form>
          <div class="d-flex pt-5">
            <p class="me-2">New to Netflix?</p>
            <router-link to="" class="nav-link">Sign up now</router-link>
          </div>

          <div class="d-flex pt-1">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>




        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import RouterComponent from '../landing/RouterComponent.vue'
</script>




<style scoped>
h1 {

  /* font-weight: 900 !important; */

}

p {
  color: #9c9c9c !important;


}

.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}

.login-background {

  background-color: rgba(11, 10, 10, 0.733);

}

.bg-input {

  background-color: #333333fc;
  color: #eee !important;
}

.form-floating>input:placeholder-shown+label {
  background: rgba(255, 255, 255, 0);
  color: #9c9c9c !important;
}

.form-floating>input+label::after {
  background: rgba(255, 255, 255, 0) !important;
  color: #eee !important;
}
</style>