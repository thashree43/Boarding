function selection(arr){
for(let i=0;i<arr.length;i++){
    let mid=i
    for(let j =i;j<arr.length;j++){
        if(arr[j] < arr[mid]){
            mid=j
        }
    }
    [arr[mid],arr[i]] =[arr[i],arr[mid]]
}
return arr
}
const array =[7,8,5,3,2]
console.log(selection(array));
function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let j = i-1
        let num = arr[i]
        if(j>=0 && arr[j] > num ){
            arr[j+1] = arr[j]
            j = j-1
        }
        num= arr[j]
    }
    return arr
}
console.log(insertion(array));


function merge(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return sortmerge(merge(left),merge(right))
}
function sortmerge(left,right){
    let leftindex = 0
    let rightindex = 0;
    let res=[]
    while(leftindex < left.length && rightindex < right.length){
        if(left[leftindex] < right[rightindex]){
            res.push(left[leftindex])
            leftindex++;
        }else{
            res.push(right[rightindex])
            rightindex++;
        }
    }
    return res.concat((left.slice(leftindex)).concat(right.slice(rightindex)))
}

console.log(merge(array));

function quick(arr){
    if(arr.length <= 1) return arr
    let left = []
    let right =[]
    let mid =[]
    let pivot = arr[Math.floor(arr.length/2)]
    for(let i =0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else if(arr[i] > pivot){
            right.push(arr[i])
        }else{
            mid.push(arr[i])
        }
    }
    return quick(left).concat(mid).concat(quick(right))
}
console.log(quick(array));
function bubble(arr){
    let n = arr.length
    let swap;
    do{
        swap = false

        for(let i=1;i<n;i++){
            if(arr[i-1] > arr[i]){
                let temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
                swap =true
            }
            n--
        }
    }while(swap)
        return arr
}
console.log(bubble(array))



let str = "abhi"
function palindrome(str){
    if(str.length <= 1) return true
    if(str[0] !== str[str.length -1]) return false
    return palindrome(str.slice(1,str.length-1))
}
console.log(palindrome(str));

function reverse(str){
    if(str.length <= 1) return str
    return reverse(str.slice(1))+ str[0]
}
console.log(reverse(str));


function res(arr,index=0,sum=0){
    if(index >= arr.length) return sum
    return res(arr,index+1,sum + arr[index])
}
console.log(res(array));

function evensum(arr,index=0,sum=0){
    if(index >= arr.length) return sum 
    if(arr[index] % 2 == 0){
        return evensum(arr,index + 1,sum + arr[index])
    }
    return evensum(arr,index+1,sum)
}
console.log(evensum(array));



