    // selection sort 
let array = [9,4,3,5,6]
function selection(arr){
   for(let i =0;i<arr.length;i++){
       let mid = i
       for(let j =i;j<arr.length;j++){
           if(arr[j] < arr[mid]) mid = j
       }
       [arr[mid],arr[i]] =[arr[i],arr[mid]]
   }
   return arr
}
console.log("selection sort",selection(array))

// timecomplexity = O(n2) , Worstcase = O(n2) , Space complexity = O(1)


// insertion sort
let array1 = [9,4,3,5,6,1]
function insertion(arr) {
    for(let i =1;i<arr.length;i++){
        let j =i-1
        let num = arr[i]
        while (j>=0 && arr[j] > num) {
            arr[j+1] = arr[j]
            j= j-1
        }
        arr[j+1] = num
    }
    return arr
}
console.log("insertion sort",insertion(array1));
// best case timecomplexity = O(n) ,average case timecomplexity = O(n2) ,worst Case time complexity O(n2) space complexity O(n)

// mergesort
let array2 = [9,4,3,5,6,1]

function merge(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return sort(merge(left),merge(right))
}
function sort(left,right){
    let leftindex =0;
    let rightindex= 0
    let res =[]
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
console.log("merge sort",merge(array2));
// timecomplexity = O(nlogn) , Worstcase = O(nlogn) , Space complexity = O(n)


// bubble
let array3 = [9,4,3,5,6,1]
function bubble(arr) {
    let n = arr.length
    let swap;
   do {
    swap = false
    for(let i=1;i<n;i++){
        if(arr[i-1] >arr[i]){
            let temp = arr[i-1]
            arr[i-1] = arr[i]
            arr[i] = temp
            swap = true
        }
    }
    n--
   } while (swap);
   return arr
}
console.log("bubble sort",bubble(array3));
// timecomplexity = O(n2) , Worstcase = O(n2) , Space complexity = O(1)


// quick sort
let array4 = [9,4,3,5,6,1]
function quick(arr) {
if(arr.length <=2) return arr
let pivot = arr[Math.floor(arr.length/2)]
let left =[]
let right = []
let mid = []
for(let i=-0;i<arr.length;i++){
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
console.log("quick sort",quick(array4));

// best case timecomplexity = O(nlogn) ,average case timecomplexity = O(nlogn) ,worst Case time complexity O(n2) 

// space complexity average = O(logn), Worst case = O(n)
  