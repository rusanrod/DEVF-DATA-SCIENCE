
document.addEventListener('DOMContentLoaded', () => {
    // let secciones = ['New-Releases', 'Action', 'Fantasy', 'Romance', 'Sci-Fi', 'Terror', 'Adventures', 'Drama', 'Documental']
    // let estrenos = `${BASE_URL}/discover/movie?${API_KEY}&${LAN}&year=2022&page=1`
    // let genero = `${BASE_URL}/discover/movie?${API_KEY}&${LAN}&page=5&with_genres=`
    // Aqui comienza la iteracion
    readIDFromLS()

    getMovie(id_movie,0).then((response) => {
        showMovie(response)
    })
    getMovie(id_movie, 1).then((response) =>{
        showCast(response)
    })
})

function showMovie(pelicula){
    let movieID = pelicula.id
    let movieName = pelicula.original_title
    let movieIMG = BASE_IMG_URL + pelicula.poster_path
    let movieYear = pelicula.release_date.slice(0,4)
    let movieOverview = pelicula.overview
    let movieLan = pelicula.original_language.toUpperCase()
    let movieGenres = ""
    pelicula.genres.forEach(el => movieGenres==="" ? movieGenres = el.name : movieGenres = movieGenres + ", " + el.name)
    let production_c = ""
    pelicula.production_companies.forEach(el => production_c === "" ? production_c = el.name : production_c = production_c + ", " + el.name)


    const movie = document.createElement('div')
    const father = document.querySelector(`main`)
    movie.classList.add('card-info')
    movie.classList.add('mx-5')
    movie.id = movieID
    movie.innerHTML = `
    <div class="movie-image"><img src=${movieIMG} alt=""></div>
    <div class="movie-text">        
      <div class="card-title my-2">${movieName} (${movieYear})</div>
      <p class="movie-summary"> ${movieOverview}</p>
      <p class="movie-info">Original language: ${movieLan}</p>
      <p class="movie-info">Genres: ${movieGenres}</p>
      <p class="movie-info">Production companies: ${production_c}</p>
      <span class="movie-info">Cast: </span>
    </div>
    `
    father.appendChild(movie)
}

function showCast(cast){
    const info = document.querySelector('.movie-text')
    let movie_cast = ""
    for(let i = 0;  i < cast.cast.length && i < 20; i++){
        movie_cast = movie_cast + `<span class="actor-link" id=${cast.cast[i].id} onclick="openActor(this.id)" >${cast.cast[i].name}, </span>`
    }
    info.innerHTML += movie_cast
}

function openActor(id){
    const actor = document.getElementById(id)
    let name = actor.innerText.replace(", ","")
    name = name.replace(/ /g,'+')
    addActor2LS(name)
    window.location.href = "./actor.html"
}