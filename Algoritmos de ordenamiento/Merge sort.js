const mergeSort = (arr)=>{
    if(arr.length<=1){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    function merge(left,right){
        let result = []
        while(left.length && right.length){
            if(left[0]<=right[0]){
                result.push(left.shift())
            }
            else{
                result.push(right.shift())
            }
        }
        return result.concat(left, right)
    } 
    return merge(left, right)
}

let arr= [5,8,4,3,2,1,10,9,6,7]
console.log(mergeSort(arr))