const API_KEY = 'e201daf14865dbe6d032b966f258ec41'
const BASE_URL = 'https://api.themoviedb.org/3'
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original'
const LAN = 'language=en-US'


const sections = document.querySelector('.sections')
let scrolls// = document.querySelector('.carrusel')
let rightBtns
let leftBtns


// Métodos básicos de funcionamiento del proyecto
function scrollBtns(){
    rightBtns = document.querySelectorAll('.right-btn')
    leftBtns = document.querySelectorAll('.left-btn')
    scrolls = document.querySelectorAll('.carrusel')
    for(let i = 0; i < rightBtns.length; i++){
        console.log(rightBtns[i])
        rightBtns[i].addEventListener('click', () => {
            scrolls[i].scrollLeft += scrolls[i].offsetWidth
        })
    
        leftBtns[i].addEventListener('click', () => {
            scrolls[i].scrollLeft -= scrolls[i].offsetWidth
        })
    }
}




// Métodos de llenado de secciones

document.addEventListener('DOMContentLoaded', () => {
    addSection('Estrenos')
    scrollBtns()
    let pelisIDs = []
        let pelicula = getNewReleases().then((response)=>{
            // console.log('respuesta de axios: ', response)
            // console.log(response)
            let i = 0
            while(pelisIDs.length>=15){
                pelisIDs.push(response[i].id)
                i++
            }
            // addMovie(response, 'Estrenos')
        })
    // console.log(addMovie(getMovie(550)),'Suspenso')
    // addMovie(501,'Suspenso')
    // addSection('Fantasía')
})

function addSection(sectionName){
    const section = document.createElement('div')
    section.classList.add("section")
    section.id = sectionName
    section.innerHTML = `
    <div class="section-head text-white">
      <a class="section-title" href="#">${sectionName}</a>
    </div>
    <div class="section-body py-2 px-2">
      <button class="button left-btn" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
        </svg>
      </button>
      <div class="carrusel" id="${sectionName}-c">
      </div>
      <button class="button right-btn" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
        </svg>
      </button>
    </div>
    `
    sections.appendChild(section)
}

function addMovie(pelicula,sectionID){
    // console.log(pelicula.data)
    let movieID = pelicula.id
    let movieName = pelicula.original_title
    let movieIMG = BASE_IMG_URL + pelicula.poster_path
    let movieYear = pelicula.release_date.slice(0,4)
    console.log(movieYear)
    const movie = document.createElement('div')
    const father = document.querySelector(`#${sectionID}-c`)
    movie.classList.add('movie')
    movie.id = movieID
    movie.innerHTML = `
        <img class="content-img" src=${movieIMG} alt="">
        <div class="content-name">
            ${movieName} (${movieYear})
        </div>
    `
    father.appendChild(movie)
}
async function getMovie(movieID){

    try{
        let pelicula = await axios.get(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}`)
        return pelicula.data
    } catch(error){
        console.log('Tu error: ',error)
    }
}

async function getNewReleases(){
    try{
        let peliculas = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&${LAN}&year=2022&page=1`)
        return peliculas.data.results
    } catch(error){
        console.log('Tu error: ',error)
    }
}
