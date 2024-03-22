import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useMovieStore = defineStore('movie', () => {

 
    let movie = ref([])
   
    // let apiKey = import.meta.env.VITE_API_KEY;
    let apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ2YjI5MjU4NDBjZTkwYjlmNTczMzQzNmI2NTE0OSIsInN1YiI6IjY1Y2MzMzBhZTIxMDIzMDE2MmMyZWE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eOfjw7WYwQNvqvpfNEBaRMPGzq3hEOe7xStqPFV0ftA";

    const movieDetail = async (movieId) => {
        let urlMovieDetail = `https://api.themoviedb.org/3/movie/${movieId}?language=es-US`;

        try {
                const response = await axios.get(urlMovieDetail, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
             
            movie.value = response.data; // Asignar todos los resultados al ref popular
        //    console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    return { movie, movieDetail}

})
