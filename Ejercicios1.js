//ejercicio 1
function mostrarMeses(){
    const meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    console.log(meses)
}

mostrarMeses()

//ejercicio 2
function esPar(entero){
    entero % 2 == 0 ? console.log("El número " + entero + "es par") : console.log("El número " + entero +" es impar")
}

esPar(15)

//ejercicio 3
function mayusMinus(string){
    let mayus = false
    let minus = false
    let arr=string.split("")
    // console.log(arr)
    arr.forEach(letter => {
        if (letter.toUpperCase() === letter) {
            mayus = true
        } 
        else {
            minus = true
        }
    } );
    if(mayus){
        if(minus){
            console.log("La palabra contiene mayúsculas y minúsculas")
        }
        else{
            console.log("La palabra contiene solo mayúsculas")
        }
    }
    else{
        console.log("La palabra contiene solo minúsculas")
    }


}

mayusMinus("HOLAAA")

//ejercicio 4
function factorial(numero){
    var resultado = 1
    for(let i = numero ; i > 0; i--){
        resultado = i * resultado
    }
    console.log(resultado)
}

factorial(10)

//ejercicio 5

function esPalindromo(string){
    let cadena = string
    cadena = cadena.toLowerCase().replace(/\s/g,"")
    let cadenaR = string.toLowerCase().replace(/\s/g,"").split("").reverse().join().replace(/,/g,"")
    cadena==cadenaR ? console.log("es palíndromo") : console.log("no es palíndromo")
    
}
esPalindromo("La ruta nos aporto otro paso natural")
// esPalindromo("Anita lava la tina")

//ejercicio 6
function lanzarDados(){
    let apariciones = [0,0,0,0,0,0,0,0,0,0,0] // solo se puede obtener como suma desde 2 a 12
    for(let i = 1; i < 36; i++){
        let dado1 = Math.round(Math.random() * 5) + 1
        let dado2 = Math.round(Math.random() * 5) + 1
        apariciones[dado1 + dado2 - 2]++
    }

    console.log(apariciones)
}

lanzarDados()