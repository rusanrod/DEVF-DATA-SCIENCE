document.addEventListener('DOMContentLoaded', () => {
    // let secciones = ['New-Releases', 'Action', 'Fantasy', 'Romance', 'Sci-Fi', 'Terror', 'Adventures', 'Drama', 'Documental']
    // let estrenos = `${BASE_URL}/discover/movie?${API_KEY}&${LAN}&year=2022&page=1`
    // let genero = `${BASE_URL}/discover/movie?${API_KEY}&${LAN}&page=5&with_genres=`
    // Aqui comienza la iteracion
    readIDFromLS()
    getMovie(id_movie).then((response) => {
        showMovie(response)
    })
})

function showMovie(pelicula){
    let movieID = pelicula.id
    let movieName = pelicula.original_title
    let movieIMG = BASE_IMG_URL + pelicula.poster_path
    let movieYear = pelicula.release_date.slice(0,4)
    const movie = document.createElement('div')
    const father = document.querySelector(`main`)
    movie.classList.add('card-info')
    movie.classList.add('mx-5')
    movie.id = movieID
    movie.innerHTML = `
    <div class="movie-image"><img src=${movieIMG} alt=""></div>
    <div class="movie-text">        
      <div class="card-title my-2">${movieName} (${movieYear})</div>
      <div class="movie-summary"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem deleniti sapiente laudantium tempore quas incidunt, aliquam at eius illum, repudiandae odio tempora nihil dolorem labore temporibus, sint officiis! Aliquam, mollitia.</div>
      <div class="movie-info">Cast: el chuek, la fiona y el burro</div>
    </div>
    `
    father.appendChild(movie)
}