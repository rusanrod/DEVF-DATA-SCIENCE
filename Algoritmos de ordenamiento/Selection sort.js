const selectionSort = (arr)=>{
    for(let i = 0; i< arr.length; i++){
        let min = i
        for(let j = i + 1; j< arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min !== i){
            [arr[i], arr[min]]=[arr[min], arr[i]]
        }
    }
    console.log()
    return arr
}
let arr= [5,8,4,3,2,1,10,9,6,7]
console.log(selectionSort(arr))