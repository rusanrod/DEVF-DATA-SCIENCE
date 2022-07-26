const API_KEY='e201daf14865dbe6d032b966f258ec41'
const BASE_URL='https://api.themoviedb.org/3'


const sections = document.querySelector('.sections')
const scroll = document.querySelector('.carrusel')

const rightBtn = document.querySelector('.right-btn')
const leftBtn = document.querySelector('.left-btn')

// Métodos básicos de funcionamiento del proyecto
rightBtn.addEventListener('click', () => {
    scroll.scrollLeft += scroll.offsetWidth
})

leftBtn.addEventListener('click', () => {
    scroll.scrollLeft -= scroll.offsetWidth
})

// Métodos de llenado de secciones

document.addEventListener('DOMContentLoaded', () => {
    addSection('Suspenso')
    console.log(getMovie(501))
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

function addMovie(movieID,sectionID){
    const movie = document.createElement('div')
    const father = document.querySelector(`#${sectionID}-c`)
    movie.classList.add('movie')
    movie.id = movieID
    // movie.innerHTML = `
    //     <img class="content-img" src=${movieIMG} alt=${movieAlt}>
    //     <div class="content-name">
    //         ${movieName} (${movieYear})
    //     </div>
    // `
    father.appendChild(movie)
}
function getMovie(movieID){
    let peliculas = 
    axios.get(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}`)
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        console.log(error)
    })
}
