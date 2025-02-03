// without recursion
let arr = [9,4,5,7,8,2]
let ar = arr.sort((a,b)=>a-b)

function binery(arr,tar){
    let left = 0
    let right = arr.length-1
    
    if(left <= right){
        let mid = Math.floor((left + right)/2)
        if(arr[mid] === tar){
            return mid
        }
        if(arr[mid] <= tar){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return -1
}
console.log(binery(ar,5))

// with resursion
let array = [9,4,5,7,8,2]
let arra = array.sort((a,b)=>a-b)

function bineryrecursion(arr,tar,left=0,right=arr.length-1){
   
    if(left > right){
        return -1
    }
  
        let mid = Math.floor((left + right)/2)
        if(arr[mid] === tar){
            return mid
        }
        if(arr[mid] <= tar){
            return bineryrecursion(arr,tar,mid+1,right)
        }else{
            return bineryrecursion(arr,tar,left,mid-1)
        }
    
}
console.log(bineryrecursion(arra,5))