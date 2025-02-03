// recursion for palindrome
let word = "malayalam"
function palindrome(str){
    if(str.length <= 1) return true
    if(str[0] !== str[str.length -1]) return false
    return palindrome(str.slice(1,str.length -1))
}
console.log(palindrome(word))

// recursion for reverse string
let word1 = "ashmika"
function reverse(str){
    if(str.length <= 1) return str
    return reverse(str.slice(1)) + str[0]
      
}
console.log(reverse(word1))

// recursion find out array sum 
let array = [9,4,3,5,6]
function result(arr,index=0,sum =0){
    if(index >= arr.length ) return sum
    return result(arr,index+1,sum + arr[index])
}
console.log(result(array))

// recursion find out even  numbers sum 
let array1 = [9,4,3,5,6]
function resulteven(arr,index=0,sum=0) {
    if(index >= arr.length) return sum
    if(arr[index] % 2 == 0) return resulteven(arr,index+1,sum + arr[index])
    return resulteven(arr,index + 1,sum)
}
console.log(resulteven(array1));


// recursion for factorial
function factorial(n){
    if(n===0) return 1
    return  n * factorial(n-1)
}
console.log(factorial(5))

// recursion for fibonocci
function fibono(n){
if(n==0) return 0
if(n==1) return 1

return fibono(n-1) + fibono(n-2)
}
console.log(fibono(5));
