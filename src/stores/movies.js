import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useMoviesStore = defineStore('movies', () => {

    let popular = ref([])
    let top = ref([])
    let upcoming = ref([])

    let urlPopular = 'https://api.themoviedb.org/3/movie/popular?language=es-ES&page='
    let urlTop = 'https://api.themoviedb.org/3/movie/top_rated?language=es-US&page='
    let urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page='

    let apiKey = import.meta.env.VITE_API_KEY;

    const popularMovies = async () => {
        try {
            let allResults = [];
            for (let page = 1; page <= 2; page++) { // Iterar sobre las primeras 3 páginas
                const response = await axios.get(urlPopular + page, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
                allResults.push(...response.data.results); // Agregar los resultados de esta página al array
            }
            popular.value = allResults; // Asignar todos los resultados al ref popular
            console.log(popular.value);
        } catch (error) {
            console.error(error);
        }
    };



    const topMovies = async () => {
        try {
            let allResults = [];
            for (let page = 1; page <= 2; page++) { // Iterar sobre las primeras 3 páginas
                const response = await axios.get(urlTop + page, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
                allResults.push(...response.data.results); // Agregar los resultados de esta página al array
            }
            top.value = allResults;
            console.log(top.value);
        } catch (error) {
            console.error(error);
        }
    };


    const upcomingMovies = async () => {
        try {
            let allResults = [];
            for (let page = 1; page <= 2; page++) { // Iterar sobre las primeras 3 páginas
                const response = await axios.get(urlUpcoming + page, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
                allResults.push(...response.data.results); // Agregar los resultados de esta página al array
            }
            upcoming.value = allResults;
            console.log(upcoming.value);
        } catch (error) {
            console.error(error);
        }
    };

    return { popular, top, upcoming, popularMovies, topMovies, upcomingMovies }

})




// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     const doubleCount = computed(() => count.value * 2)
//     function increment() {
//         count.value++
//     }

//     return { count, doubleCount, increment }
// })
