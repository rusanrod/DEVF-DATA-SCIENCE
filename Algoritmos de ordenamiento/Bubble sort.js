const bubbleSort = (arr) => {
    let accumulator = 0
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            accumulator++
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                // let temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
            }
        }
    }
    console.log(`${accumulator} vueltas con el método normal`)
    return arr
} 

let arr= [5,8,4,3,2,1,10,9,6,7]


const bubbleSort2 = (arr)=>{
    let accumulator = 0
    let change = true

    for(let i = 0; change && i < arr.length; i++){
        change = false
        for(let j = 0; j<arr.length-1-i; j++){
            accumulator++
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                // let temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
                change = true
            }
        }
    }
    console.log(`${accumulator} vueltas con el segundo metodo`)
    return arr
}
console.log(bubbleSort2(arr))