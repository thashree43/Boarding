

// Callback
function callb(callback){
    const interval = setInterval(callback,1000)
    setTimeout(()=>{
        clearInterval(interval)
    },5000)
}
callb(()=>{
    console.log("heloooo guys")
})

// currying 
function cur(x){
    return function curry(y){
        return x + y
    }
}
console.log("currying",cur(4)(8))

// promise
const mypromise = new Promise((resolve,reject)=>{
    let success = true
    if(success){
        resolve("success resolved")
    }else{
        reject("error occured")
    }
})
mypromise
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.error(error);
    
})

console.log(mypromise);

// call,apply,bind

function great(message){
    console.log(message +`${this.name}`);
    
}

function good(message){
    console.log(message+`${this.name}`);
    
}
function bad(message){
    console.log(message +`${this.name}`);
    
}
const person ={
    name:"aju"
}
great.call(person,"helloooo")
good.apply(person,["Good morning"])
const b = bad.bind(person,"koooiii")
b()

// firstclass function 
function first(fn,name){
    return fn(name)
}
const fn = function newfn(name){
    return `${name}`
}
console.log(first(fn,"ashmika"));


// pure function 
function pure(a,b){
    return a+b
}
console.log(pure(9,10));

// Shallow Copy && Deep Copy
const original = {a:1,b:2}
const shallow = {...original}
shallow.a=6
console.log(shallow)
console.log(original);
const origin ={a:1,c:8}
const deep = JSON.parse(JSON.stringify(origin))
deep.c=9;
console.log(deep);
console.log(origin);

// 

const n ="a1b2c3"

let res =''
for(let i=0;i<n.length;i++){
    if(isNaN(n[i])){
        let char = n[i]
        let items = Number((n[i+1]))
        res += char.repeat(items)
    }
   
    
}
console.log(res);

// generetor
function* generetor(){
    yield 1;
    yield 2;
    yield 3;
}
const gen = generetor()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// IIFE

(function(a,b){
    return a+b
})(9,4)


