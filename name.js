const a = [1, 2, 3, 2, 3, 4];
let count;
let limit=0
for (let i = 0; i < a.length; i++) {
  count = 0;
  for (let j = 0; j < a.length; j++) {
    if (i !== j) {
      if (a[i] == a[j]) {
        count++;
      }
    }
    
  }
  if(count > 0){
    
    a[limit] = a[i]
    limit++;
  }
}
for(let i=0;i<limit;i++){
    console.log(a[i])
}
