let characters = axios.get('https://www.breakingbadapi.com/api/characters').then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log('Tu error: ',error)
}).finally(()=>{
    console.log(123)
})
// console.log(characters)


async function obtenerFrases(){
    
    // console.log('12',frases)
    
    try{
        let frases = await axios.get('https://www.breakingbadapi.com/api/quotes')
        return frases.data
    } catch(error){
        console.log('Tu error: ',error)
    }
}

let axiosFrases=obtenerFrases().then((response)=>{
    console.log('respuesta de axios: ', response)
})
console.log(axiosFrases)

const API_KEY='e201daf14865dbe6d032b966f258ec41'
const BASE_URL='https://api.themoviedb.org/3'
let peliculas = 
axios.get(`${BASE_URL}/movie/550?api_key=${API_KEY}`)
.then((response)=>{
    console.log("Peliculas: ")
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})