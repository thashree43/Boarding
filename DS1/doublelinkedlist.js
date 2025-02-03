class Node{
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}
class doubly{
    constructor(){
        this.head = null
        this.tail = null
    }
    insert(data){
        let node = new Node(data)
        if(!this.head){
            this.head = this.tail = node
        }else{
            this.tail.next = node
            node.prev =this.tail
            this.tail = node
        }
    }
    delete(data){
        if(!this.head) return
        let cur = this.head
        while(cur){
            if(cur.data === data){
                if(cur === this.head){
                    this.head = this.head.next
                    if(this.head) this.head.prev = null
                }else if(cur === this.tail){
                    this.tail = this.tail.prev
                    if(this.tail) this.tail.next = null
                }else{
                    cur.prev.next = cur.next
                    cur.next.prev = cur.prev
                }
                return
            }
            cur = cur.next
        }
    }
    search(data){
        let cur = this.head
        while(cur){
            if(cur.data ===data) return cur
                cur = cur.next
            }
            return null
        }
    print(){
        if(!this.head || !this.head.next){
            console.log(" not enough element not there")
            return 
        }
        const second = this.head.next
        console.log(" the second element be this",second)
        const last = this.tail.prev 
        console.log("the second last",last)
    }
    display(){
        let cur = this.head
        const res = []
        while(cur){
            res.push(cur.data)
              cur = cur.next
        }
            console.log(res.join("<->"))
        
    }
    reverse(){
        if(!this.head) return 
        let cur = this.head
        let temp = null
        while(cur){
            temp = cur.prev
            cur.prev = cur.next
            cur.next = temp
            cur = cur.prev
        }
        if(temp){
            this.head = temp.prev
        }
    }
}
let dou = new doubly()
dou.insert(6)
dou.insert(0)
dou.insert(9)
dou.insert(7)
dou.insert(3)
dou.insert(4)
dou.insert(8)
dou.display()
dou.delete(0)
dou.display()
const searchresult = dou.search(9)
console.log("serched :",searchresult ? searchresult.data :"not found")
dou.print()
dou.reverse()
dou.display()