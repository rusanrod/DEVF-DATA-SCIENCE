arr = [1,2,2,3,5,6,7,9,12,12,13,14,16,30,33,35,40,42,65,66,66,88,89]

function busquedaBinaria(arr, value){
    let start = 0
    let end = arr.length-1
    let steps = 0

    while(start <= end){
        steps++
        let middle = Math.floor((end + start) / 2)

        if(arr[middle]==value){
            return `Encontré el valor ${value} en la posicion ${middle} en ${steps} pasos`
        }
        else if(arr[middle] < value){
            start = middle + 1
        }
        else{
            end = middle - 1
        }
    }
    return 'El valor no está'
}

console.log(busquedaBinaria(arr,89))