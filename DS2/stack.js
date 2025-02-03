class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class stack{
    constructor(){
        this.item =[]
    }
    insert(data){
        this.item.push(data)
    }
delete(){
    return this.item.pop()
}
peek(){
return this.item[this.item.length-1]
}
print(){
    console.log(this.item.join("->"));
    
}
}

class queue{
    constructor(){
        this.item =[]
    }
    insert(data){
        this.item.push(data)
    }
    delete(){
        return this.item.shift()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    print(){
        console.log(this.item.join('->'));
        
    }
}
