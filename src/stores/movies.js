import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useMoviesStore = defineStore('movies', () => {

    let popular = ref([])
    let url = 'https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1'
    let apiKey = import.meta.env.VITE_API_KEY;

    const popularMovies = async () => {
        try {
            const response = await axios.get(url, {
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

    return { popular, popularMovies }

})




// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     const doubleCount = computed(() => count.value * 2)
//     function increment() {
//         count.value++
//     }

//     return { count, doubleCount, increment }
// })
