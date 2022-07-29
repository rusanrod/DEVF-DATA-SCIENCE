// Constantes para uso de la API
const API_KEY = 'api_key=e201daf14865dbe6d032b966f258ec41'
const BASE_URL = 'https://api.themoviedb.org/3'
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original'
const LAN = 'language=en-US'

const formulario = document.querySelector('form')
const barra_busqueda = document.querySelector('input')
//variables de transicion entre paginas
let id_movie = 0
let movie_name = ""
let actor_name = ""

//movie ID get and set
function addID2LS(dato){
    localStorage.setItem('id_movie', JSON.stringify(dato))
}

function readIDFromLS(){
    id_movie = JSON.parse(localStorage.getItem('id_movie'))
}

//actor name get and set
function addActor2LS(dato){
    localStorage.setItem('id_actor', JSON.stringify(dato))
}

function readActorFromLS(){
    actor_name = JSON.parse(localStorage.getItem('id_actor'))
}

// movie name get and set
function addMovieName2LS(dato){
    localStorage.setItem('movie_name', JSON.stringify(dato))
}

function readMovieNameFromLS(){
    movie_name = JSON.parse(localStorage.getItem('movie_name'))
}

function openMovie(id){
    addID2LS(id)
    window.location.href = "./movie.html"
}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(barra_busqueda.value)
    addMovieName2LS(barra_busqueda.value)
    window.location.href = "./movie.html"
})
// Métodos GET 
async function getMovie(movieID, option){
    let url = ""
    option === 0 ? url = `${BASE_URL}/movie/${movieID}?${API_KEY}` : url = `${BASE_URL}/movie/${movieID}/credits?${API_KEY}`
    try{
        let pelicula = await axios.get(url)
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

async function getActorMovies(name){
    try{
        let peliculas = await axios.get(`${BASE_URL}/search/person?${API_KEY}&query=${name}`)
        return peliculas.data.results[0].known_for
    }catch(error){
        console.log('Tu error: ',error)
    }
}
