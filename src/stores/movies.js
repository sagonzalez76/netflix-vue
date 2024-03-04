import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useMoviesStore = defineStore('movies', () => {

    let popular = ref([])
    let top = ref([])
    let upcoming = ref([])

    let urlPopular = 'https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1'
    let urlTop = 'https://api.themoviedb.org/3/movie/top_rated?language=es-US&page=1'
    let urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'


    // let apiKey = import.meta.env.VITE_API_KEY;
    let apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ2YjI5MjU4NDBjZTkwYjlmNTczMzQzNmI2NTE0OSIsInN1YiI6IjY1Y2MzMzBhZTIxMDIzMDE2MmMyZWE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eOfjw7WYwQNvqvpfNEBaRMPGzq3hEOe7xStqPFV0ftA";



    const popularMovies = async () => {
        try {
            const response = await axios.get(urlPopular, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            popular.value = response.data; // Se almacena la respuesta de la api
            console.log(popular.value);
        } catch (error) {
            console.error(error);
        }
    };


    const topMovies = async () => {
        try {
            const response = await axios.get(urlTop, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            top.value = response.data; // Se almacena la respuesta de la api
            console.log(top.value);
        } catch (error) {
            console.error(error);
        }
    };


    const upcomingMovies = async () => {
        try {
            const response = await axios.get(urlUpcoming, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            upcoming.value = response.data; // Se almacena la respuesta de la api
            console.log(upcoming.value);
        } catch (error) {
            console.error(error);
        }
    };

    return { popular, top,upcoming, popularMovies, topMovies, upcomingMovies}

})




// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     const doubleCount = computed(() => count.value * 2)
//     function increment() {
//         count.value++
//     }

//     return { count, doubleCount, increment }
// })
