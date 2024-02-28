<template>
    <div class="container text-light">
        <footer class="py-2">
            <div class="row">


                <div class="col-4 col-md-3 mb-3">
                    <!-- <h5>Section</h5> -->
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2" v-for="lista in lista1" :key="lista.id"><a href="#"
                                class="p-0 text-secondary text-underlined">{{ lista.title }}</a></li>

                    </ul>
                </div>

                <div class="col-4 col-md-3 mb-3">
                    <!-- <h5>Section</h5> -->
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2" v-for="lista in lista2" :key="lista.id"><a href="#"
                                class="p-0 text-secondary text-underlined">{{ lista.title }}</a></li>
                    </ul>
                </div>
                <div class="col-4 col-md-3 mb-3">
                    <!-- <h5>Section</h5> -->
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2" v-for="lista in lista3" :key="lista.id"><a href="#"
                                class="p-0 text-secondary text-underlined">{{ lista.title }}</a></li>
                    </ul>
                </div>
                <div class="col-4 col-md-3 mb-3">
                    <!-- <h5>Section</h5> -->
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2" v-for="lista in lista4" :key="lista.id"><a href="#"
                                class="p-0 text-secondary text-underlined">{{ lista.title }}</a></li>
                    </ul>
                </div>

                <!-- <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div> -->
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
                <p>Netflix Colombia &copy; 2024 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
                                <use xlink:href="#twitter" />
                            </svg></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
                                <use xlink:href="#instagram" />
                            </svg></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
                                <use xlink:href="#facebook" />
                            </svg></a></li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script setup>

const lista1 = [
    {
        id: 1,
        title: 'Preguntas frecuentes'

    }, {
        id: 2,
        title: 'Relaciones con inversionistas'

    }, {
        id: 3,
        title: 'Formas de ver'

    }, {
        id: 4,
        title: 'Información corporativa'

    }, {
        id: 5,
        title: 'Solo en Netflix'

    },
]

const lista2 = [
    {
        id: 1,
        title: 'Centro de ayuda'

    }, {
        id: 2,
        title: 'Empleo'

    }, {
        id: 3,
        title: 'Términos de uso'

    }, {
        id: 4,
        title: 'Contáctanos'

    }
]


const lista3 = [
    {
        id: 1,
        title: 'Cuenta'

    }, {
        id: 2,
        title: 'Canjear tarjetas de regalo'

    }, {
        id: 3,
        title: 'Privacidad'

    }, {
        id: 4,
        title: 'Prueba de velocidad'

    }
]


const lista4 = [
    {
        id: 1,
        title: 'Prensa'

    }, {
        id: 2,
        title: 'Comprar tarjetas de regalo'

    }, {
        id: 3,
        title: 'Preferencias de cookies'

    }, {
        id: 4,
        title: 'Avisos legales'

    }
]


</script>

<style scoped>
a {
    color: rgb(255, 255, 255) !important;
}
</style>