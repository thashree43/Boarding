class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class linked{
    constructor(){
        this.head = null
    }
    insert(data){
        let node = new Node(data)
        node.next = this.head
        this.head = node
    }
   merge(head = this.head){
       if(!head | !head.next) return head
       let midle = this.getmidle(head)
       let nexttomidle = midle.next
       midle.next = null
       let left = this.merge(head)
       let right = this.merge(nexttomidle)
       return this.mergesort(left,right)
       
   }
   getmidle(head){
       if(!head) return head
       let slow = head
       let fast = head.next
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
   }
   mergesort(left,right){
       if(!left) return right
       if(!right) return left
       let result
       if(left.data <= right.data){
           result = left
           result.next = this.mergesort(left.next, right)
       }else{
           result = right
           result.next = this.mergesort(left, right.next)
       }
       return result
   }
   sort(){
       this.head = this.merge(this.head)
   }
   
    print(){
        let cur = this.head
        let res =[]
        while(cur){
            res.push(cur.data)
            cur = cur.next
        }
        console.log(res.join("->"))
    }
}
let li = new linked()
li.insert(8)
li.insert(7)
li.insert(2)
li.insert(3)
li.insert(5)
li.insert(10)
li.print()
li.sort()
li.print()