
<script setup>
import { ref } from 'vue';

const pines = ref([
  {
    id: 1,
    number: 1,
    img: "https://occ-0-3986-3933.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229"
  },
  {
    id: 2,
    number: 2,
    img: "https://occ-0-3986-3933.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e"
  },
  {
    id: 3,
    number: 3,
    img: "https://occ-0-3986-3933.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZfhNS88u5ao0M3F5X4HRBGCFsqdb2nncDt32YQHoM-1BeLJq93H30hWyleqclSwt1jNGm6l0tkeefKiiCOLLL5gNjpSjS_Xlaij.png?r=bd7"
  },
  {
    id: 4,
    number: 4,
    img: "https://occ-0-3986-3933.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4"
  }
]) 
</script>


<template>
  <div class="text-center" style="width: 100vw; height: 100vh;" id="parent">
    <div class="text-light bg-success">
      <h1 class="">Quien esta viendo ahora?</h1>
      <div class="d-flex justify-content-center">
        <div class="row ">
          <div v-for="pin of pines" :key="pin.id" class="col sm-2 m-2" id="pin">
            <div class="card" style="width: auto;">
              <button class="border-0">
                <img :src="`${pin.img}`" class="card-img-top rounded-1" alt="profile4">
                <div class="card-body">
                  <p class="card-text text-light">

                    {{ pin.number }}

                  </p>
                </div>
              </button>
              <p class="card-text text-light"> <i class="bi bi-lock" style="color: rgb(135, 135, 135)"></i> </p>
            </div>
          </div>

          <div class="col sm-2 m-2" id="pin">
            <div class="card " style="width: auto;">
              <button class="border-0 mb-2">
                <i class="bi bi-plus-circle" style="font-size: 4.2rem;  "></i>
                <div class="card-body mx-0 mt-4">
                  <h6 class="card-text text-light">Agregar perfil</h6>
                </div>
              </button>
              <p class="card-text text-light"><i class="bi bi-lock" style="color: rgb(135, 135, 135)"></i> </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>



<style scoped>
* {
  padding: 0;
  margin: 0;
  background-color: rgb(20, 20, 20);
}



#parent {

  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 130px;
}

i {
  color: aliceblue;
}


button:hover img {
  outline: 2px solid rgb(255, 255, 255);
  border-radius: 20px;
}

button:hover p {
  font-weight: 500;
}
</style>
