//arrays
//map es la mejor opcion para copiar un arreglo

// let nombres = ["maria", "juan", "josee"]
// let nombres2 = nombres.map( el => el)

// // console.log(nombres)
// // console.log(nombres2)
// nombres2[1]="rosa"
// // console.log(nombres)
// // console.log(nombres2)

const array = [1,6,4,9,5,2,8,3,7]
const array2 = [10,11,12]
let result
//todos estos van sin arrow function
array.push(999)                             //agrega al final del arreglo
result = array.pop()                        //saca del final de arreglo y lo retorna
array.shift()                               //elimina el primer elemento del arreglo
result = unshift(50)                          //agrega un elemento en la primera posicion del array

result = array.indexOf(6)                   //regresa el indice del elemento del argumento
result = array.concat(array2)               //concatena 2 arreglos
result = array.includes(2)                  //busca si el arreglo incluye el elemento del argumento
result = array.join('')                     //une todos los elementos de un arreglo en un solo string separado por el caracter del argumento 
result = array.fill(0,2,5)                  // llena con 0 desde la posicion 2 hasta la posicion 5-1
result = array.fill(0,2)                    // llena con 0 desde la posicion 2 hasta el final
result = array.fill(0)                      // llena con 0 todo el arreglo


//todos estos van con arrow function 
array.forEach(el => console.log(el))        //recorre el arreglo y hace algo, no retorna nada
result = array.map(el => el*2)              //recorre el arreglo, hace algo y retorna el arreglo
result = array.filter(el => el === 2)       //recorre el arreglo y retorna los elemenos que cumplen una condicion
result = array.find(el => el ===2)          //regresa el primer elemento que cumpla una condicion 
result = array.every(el => el > 2)          //revisa si todos los elementos de un arreglo que cumple una condicion 
result = array.some(el => el > 2)           //revisa si al menos algun elemento del arreglo cumple una condicion
result = array.reduce((acc, el)=> acc + el,0)   //reduce todo el arreglo a un solo valor dependiendo de la operacion