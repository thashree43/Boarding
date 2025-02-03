// without recursion 
let arr = [9,4,5,7,8,2]

function linear(arr,tar){
    for(let i =0;i<arr.length;i++){
        if(arr[i] === tar){
            return i
        }
    }
    return -1
}
console.log(linear(arr,7))

// with recursion 
let array = [9,4,5,7,8,2]

function linearrecursion(arr,tar,index =0){
   if(index >= arr.length){
       return -1
   }
   if(arr[index] === tar){
       return index
   }
   return linearrecursion(arr,tar,index+1)
}
console.log(linearrecursion(array,7))