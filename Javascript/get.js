// Constantes para uso de la API
const API_KEY = 'api_key=e201daf14865dbe6d032b966f258ec41'
const BASE_URL = 'https://api.themoviedb.org/3'
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original'
const LAN = 'language=en-US'

//variables de transicion entre paginas
let id_movie = 0
let actor_name = ""
function addID2LS(dato){
    localStorage.setItem('id_movie', JSON.stringify(dato))
}

function readIDFromLS(){
    id_movie = JSON.parse(localStorage.getItem('id_movie'))
}

// Métodos GET 
async function getMovie(movieID){

    try{
        let pelicula = await axios.get(`${BASE_URL}/movie/${movieID}?${API_KEY}`)
        return pelicula.data
    } catch(error){
        console.log('Tu error: ',error)
    }
}

async function getNewReleases(path){
    try{
        // let peliculas = await axios.get()
        let peliculas = await axios.get(path)
        return peliculas.data.results
    } catch(error){
        console.log('Tu error: ',error)
    }
}
