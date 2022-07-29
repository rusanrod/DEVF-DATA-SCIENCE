document.addEventListener('DOMContentLoaded', () => {
    // Aqui comienza la iteracion
    readMovieNameFromLS()
    searchPage(movie_name)
    searchMovies(movie_name).then((response) =>{
        response.forEach(el => {
            showSearch(el)
        });
        // console.log(response)
    })
})
function searchPage(actor_name){
    let name = actor_name.replace("+"," ")
    const movie = document.createElement('div')
    const father = document.querySelector(`main`)
    movie.classList.add('movie-search')
    movie.classList.add('mx-5')
    // movie.id = movieID
    movie.innerHTML = `
    <div class="search">${name}</div>
    <div class="movies">
      
    </div>
    `
    father.appendChild(movie)
}

function showSearch(pelicula){
    let movieName = pelicula.original_title
    let movieIMG = BASE_IMG_URL + pelicula.poster_path
    let movieYear = pelicula.release_date.slice(0,4)

    const movie = document.createElement('div')
    const father = document.querySelector(`.movies`)
    movie.classList.add('single-movie')
    movie.classList.add('my-3')
    movie.innerHTML = `
        <img id=${pelicula.id} onclick="openMovie(this.id) "src=${movieIMG} alt="">
        <span class="movie-name">${movieName} (${movieYear})</span>
    `
    father.appendChild(movie)
}

function openActor(id){
    const actor = document.getElementById(id)
    let name = actor.innerText.replace(", ","")
    addActor2LS(name)
    window.location.href = "./actor.html"
}