<template>
  <div>
    <div class="container col-xxl-8 px-4 py-5 my-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">

          <div class="video-container">
            <video autoplay playsinline muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4">
            </video>
            <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              class="poster-image">
          </div>





          <!-- <img src="" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"> -->
        </div>
        <div class="col-lg-6 text-light">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-light">Disfruta en tu TV</h1>
          <p class="lead fw-semibold">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
          <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
h1 {

  font-weight: 900 !important;

}


.video-container {
  position: relative;
  width: 100%;
  /* Ajusta el ancho según tus necesidades */
  height: auto;
  /* Ajusta la altura según tus necesidades */
}

.video-container video {
  position: relative;
  display: block;
  width: 99%;
  height: auto;
  object-fit: cover;
  /* Para cubrir todo el contenedor */
}

.video-container .poster-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1;
  /* Asegúrate de que la imagen esté sobre el video */
}


</style>