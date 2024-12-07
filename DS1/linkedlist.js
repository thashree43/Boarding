// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class linked{
//     constructor() {
//        this.head = null 
//     }
//     insert(data){
//         let node = new Node(data)
//         node.next = this.head
//         this.head = node
//     }
//     insertdata(data,index){
//         if (index < 0) {
//             console.log("the index does not exist");
            
//         }
//         let node = new Node(data)
//         if (index ===0) {
//             node.next = this.head
//             this.head = node
//             return
//         }
//         let cur = this.head
//         let prev = null
//         let cnt =0;
//         while (cur !== null && cnt !== index) {
//             prev = cur
//             cur  = cur.next 
//             cnt++
//         }
//         if (cur === null && cnt === index) {
//             prev.next = node
//         }else{
//             node.next = cur
//             prev.next = node

//         }
//     }
//     delete(data){
//         let cur = this.head
//         let prev = null
//         while(cur){
//             if (cur.data === data) {
//                 if (prev === null) {
//                     this.head = cur.next
//                 }else{
//                     prev.next = cur.next
//                 }
//             }return
//             prev = cur
//         cur = cur.next
//         }
        
//     }
//     deletedata(data,index){
//         let cur = this.head
//         let prev = null
//         let cnt = 0;
//         while(cur !==null && cnt !== index){
//             prev = cur
//             cur = cur.next
//             cnt++;
//         }
//         if (cur !== null && cnt === index) {
//             if (prev === null) {
//                 this.head = cur.next
//             }else{
//                 prev.next = cur.next
//             }
//         }
//     }
//     print(){
//         let cur = this.head
//         let ans =''
//         while (cur) {
//             ans += cur.data + '->'
//             cur = cur.next
//         }
//         console.log(ans);
        
//     }
//     reverse(){
//         let cur = this.head
//         let prev = null
//         let next = null
//         while (cur) {
//             next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }
//         this.head = prev
//     }
// }

// const li = new linked()
// li.insert(8)
// li.insert(0)
// li.insert(9)
// li.insertdata(10,1)
// li.print()
// li.delete(9)
// li.print()
// li.deletedata(8,2)
// li.print()
// li.reverse()
// li.print()


// mergesort using linkedlist 
// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Linked{
//     constructor(){
//         this.head = null
//     }
//     insert(data){
//         let node = new Node(data)
//         node.next = this.head
//         this.head = node
//     }
//     print(){
//         let cur = this.head
//         let ans = ''
//         while (cur) {
//             ans += cur.data +'->'
//             cur = cur.next
//         }
//         console.log(ans);
        
//     }
//     mergesort(head = this.head){
//         if (!head || !head.next) return head
//         let middle = this.getmiddle(head)
//         let nexttomiddle = middle.next

//         middle.next = null
//         let left = this.mergesort(head)
//         let right = this.mergesort(nexttomiddle)

//         return this.sortedmerge(left,right)
//     }
//     getmiddle(head){
//         if(!head) return head

//         let slow = head
//         let fast = head.next
//         while (fast && fast.next) {
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow
//     }
//     sortedmerge(left,right){
//         if(!left) return right
//         if(!right) return left

//         let result;
//         if (left.data <= right.data) {
//             result = left
//             result.next = this.sortedmerge(left.next,right)
//         }else{
//             result = right
//             result.next = this.sortedmerge(left,right.next)
//         }
//         return result
//     }
//     sort(){
//         this.head = this.mergesort(this.head) 
//     }
// }
// const li = new Linked()
// li.insert(9)
// li.insert(0)
// li.insert(5)
// li.insert(3)
// li.insert(1)
// li.print()
// li.sort()
// li.print()



// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Circular {
//     constructor() {
//         this.head = null;
//     }

//     insert(data) {
//         let node = new Node(data);
        
//         // If the list is empty
//         if (!this.head) {
//             this.head = node;
//             node.next = this.head; // Circular link
//         } else {
//             let cur = this.head;
//             // Traverse to the last node (whose next is pointing to the head)
//             while (cur.next !== this.head) {
//                 cur = cur.next;
//             }
//             // Insert the new node at the end and link it back to the head
//             cur.next = node;
//             node.next = this.head;
//         }
//     }

//     print() {
//         if (!this.head) {
//             console.log("The list is empty.");
//             return;
//         }
        
//         let cur = this.head;
//         let ans = '';
//         do {
//             ans += cur.data + ' -> ';
//             cur = cur.next;
//         } while (cur !== this.head);
        
//         console.log(ans + '(back to head)');
//     }
// }

// let cir = new Circular();
// cir.insert(8);
// cir.insert(0);
// cir.insert(6);
// cir.insert(2);
// cir.insert(7);
// cir.insert(1);
// cir.insert(4);
// cir.print();  // Output: 8 -> 0 -> 6 -> 2 -> 7 -> 1 -> 4 -> (back to head)



function a(n){
    if(n.length <= 1){
        return n
    }
    return a(n.slice(1))+n[0]


}
const b = 'anj'
console.log(a(b))
for(let i=b.length ;i>=0;i--){
    li
}