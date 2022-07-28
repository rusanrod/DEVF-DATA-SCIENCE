document.addEventListener('DOMContentLoaded', () => {
    // Aqui comienza la iteracion
    readActorFromLS()
    actorPage(actor_name)
    getActorMovies(actor_name).then((response) =>{
        response.forEach(el => {
            showActor(el)
        });
    })
})
function actorPage(actor_name){
    let name = actor_name.replace("+"," ")
    const movie = document.createElement('div')
    const father = document.querySelector(`main`)
    movie.classList.add('actor-info')
    movie.classList.add('mx-5')
    // movie.id = movieID
    movie.innerHTML = `
    <div class="actor-name">${name}</div>
    <div class="actor-movies">
      
    </div>
    `
    father.appendChild(movie)
}

function showActor(pelicula){
    let movieName = pelicula.original_title
    let movieIMG = BASE_IMG_URL + pelicula.poster_path
    let movieYear = pelicula.release_date.slice(0,4)

    const movie = document.createElement('div')
    const father = document.querySelector(`.actor-movies`)
    movie.classList.add('single-movie')
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