const insertionSort = (arr)=>{
    for(let i =0; i<arr.length; i++){
        for(let j = i; j > 0 && arr[j] < arr[j-1]; j--){
           [arr[j],arr[j-1]] = [arr[j-1], arr[j]] 
        }
    }
    return arr
}

let arr= [5,8,4,3,2,1,10,9,6,7]
console.log(insertionSort(arr))