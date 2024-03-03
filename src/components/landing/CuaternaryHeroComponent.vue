<template>
  <div>
    <div class="container col-xxl-8 px-0 py-5 my-5 w-75">
      <div class="row flex-lg-row align-items-center g-5 py-5 text-center">
        <div class="col-12 text-center px-0">

          <h1 class="text-light fw-bold my-5">Preguntas Frecuentes</h1>

          <AccordionComponent v-for="accordion in accordions" :key="accordion.id" :title="accordion.title"
            :description="accordion.description" :id="accordion.id">
          </AccordionComponent>
          <p class="fw-semibold lead mb-3 fs-5 text-light mt-5">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
          </p>
          <div class="d-grid gap-1 d-sm-flex justify-content-sm-center">
            <div class="form-floating col-lg-4 col-md-6">
              <input type="email" class="form-control bg-dark p-2 text-white bg-opacity-50" id="floatingInputGrid"
              placeholder="name@example.com" value="">
            <label for="floatingInputGrid text-light">Email</label>
            </div>

            <ButtonComponent :msg="'Comenzar'" :arrow=true :bold=true class="col-lg-2 col-md-3 p-0 fs-5">
            </ButtonComponent>
          </div>

        </div>




      </div>
    </div>
  </div>
</template>

<script setup>

import AccordionComponent from "./AccordionComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";


const accordions = [
  {
    id: 1,
    title: "¿Qué es Netflix ?",
    description: "Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet. Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible.Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!",
  },
  {
    id: 2,
    title: "¿Cuánto cuesta Netflix?",
    description: "Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 16.900 hasta $ 38.900 al mes. Sin costos adicionales ni contratos."
  },
  {
    id: 3,
    title: "¿Dónde puedo ver Netflix?",
    description: "Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet.Lleva Netflix contigo adonde sea.",
  },
  {
    id: 4,
    title: "¿Cómo cancelo?",
    description: "Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.",
  },
  {
    id: 5,
    title: "¿Qué puedo ver en Netflix?",
    description: "Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.",
  },
  {
    id: 6,
    title: "¿Es bueno Netflix para los niños?",
    description: "La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.",
  }
]






</script>

<style scoped>
h1 {

  font-weight: 900 !important;

}
</style>