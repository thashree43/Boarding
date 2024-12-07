// pass by value (it may taken as in primitive data type)
function ashi(x){
    x = 100
    console.log("the value inside the function be this ",x); 
}
let a = 5
ashi(a)
console.log("the value outside the function be this",a);

// pass by reference (It may taken as in non primitive data type)

function ajal(obj){
    obj.name = "ajal"
    console.log("the name inside the function be this ",obj.name); 
}
let agent = {
    name:"ashi"
}
ajal(agent)
console.log('the name outside the function be this ',agent);



