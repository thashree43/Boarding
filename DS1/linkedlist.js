class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class link{
    constructor(){
        this.head = null
    }

    insert(data){
        let node = new Node(data)
        node.next = this.head
        this.head = node
    }
    delete(data){
        if(!this.head) return 
        let cur = this.head
        let prev = null
        while(cur){
            if(cur.data === data){
                if(prev === null){
                    this.head = cur.next
                }else{
                    prev.next = cur.next
                }
                return
            }
            prev = cur
            cur = cur.next
        }
    }
    insertindex(data,index){
        if(index < 0){
            console.log(" this index doent exist")
            return
        }
        let  node = new Node(data)
        if(index === 0){
            node.next = this.head
            this.head = node
            return
        }
        let cur = this.head
        let prev = null
        let cnt = 0
        while(cur !== null && cnt !== index){
            prev = cur
            cur = cur.next
            cnt ++
        }
        if(cnt === index){
            prev.next = node
        }else{
            node.next = cur
            prev.next = node
        }
    }
    search(data){
        let cur = this.head
        while(cur){
            if(cur.data === data) return  cur
            cur = cur.next
        }
        return null
    }
    display(){
        let cur = this.head
        let res = []
        while(cur){
            res.push(cur.data)
            cur = cur.next
        }
        console.log(res.join("->"))
    }
    reverse(){
        let cur = this.head
        let temp = null
        let prev = null
        while (cur) {
            temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        }
    this.head = prev
    }
    print(){
        if(!this.head |!this.head.next) return
        let second = this.head.next
        let cur =this.head
        let secondlast
                while (cur.next) {
            if(cur.next.next == null){
                 secondlast = cur.data
            }
            cur = cur.next  

        }
        console.log("second first",second);

                console.log("second last",secondlast);

    }
    secondlarge(){
        if(!this.head | !this.head.next) return this.head
        let second = -Infinity
        let large = -Infinity
        let cur = this.head
        while(cur){
        if(cur.data > large){
            second = large
            large = cur.data
        }else if(cur.data > second && cur.data !== large){
            second = cur.data
        }
        cur = cur.next
    }
        console.log("second",second)
        console.log("large",large);
        
    }
}
const li = new link()
li.insert(4)
li.insert(8)
li.insert(9)
li.insert(7)
li.insert(4)
li.insert(1)
li.display()
li.delete(7)
li.display()
li.reverse()
li.display()
let result = li.search(9)
console.log("serched :",result ? result.data :"not found")
li.print()
li.secondlarge()