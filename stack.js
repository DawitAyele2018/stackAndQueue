/* 
stack is last in first out (LIFO)

*/

// using built in Data Stracture array
//  array pop and array push => this is a better approach
//  array shift and array unshift



class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    // pop
    /* 
        create a function that accepts input
        - create a new node using the new input
        - insert the new node to the stack
        - if the stack is empty, set the first and last pointer to the new node and incrment size
        - else create a variable that holds the current first property
        - reset the first property to be the newly created node
        - set the next propery to be the priviously created variable
        - increment size
    */ 
   push(value){
    var node = new Node(value);
    if(!this.first) {
        this.first = node;
        this.last = node;
        
     }
     else{
         var current = this.first
         this.first = node;
         this.first.next = current;
     }
     this.length++;
     return this;

   }
//    pop
/* 
   - if first is empty return null
   - else set first to pe the next proprtoy
*/
   pop(value){
    if(!this.first) return null;
    var removed;
    if(this.length===1){
        removed = this.first;
        this.first= null;
        this.last = null
    }
    else {
        removed = this.first;
        this.first= this.first.next;
        
    }
    this.length--;
        return removed;

   }
}

class Node{
    constructor (value){
        this.value = value;
        this.next = null;
    }
}

var stack = new Stack();
stack.push('Dawit');
stack.push('Ayele');
stack.push('girma');
stack.push('Woldegebreal');
stack.push('beruke');

// Queue

/* 
    use
    Can be implented with array
    - We can use shift combined with push
    - we can also do unshift combined with pop

*/

class Queue{
    constructor(){
        this.first = null;
        this.second = null;
        this.length = null
    }

    /* 
        - create a new node with the given value
        - if there is no node in the queue set first and and last point the new node
        - if there is one or more node create a temporary variable to store the node first points to
        - reset last next to point to the new node and last to the newNode
        - increment the size
        - return the object
    */
    enqueue(value){
        var node = new Node(value)
      if(!this.last){
        this.first = node;
        this.last = node;
      }
      else{
          this.last. next = node;
          this.last = node;
      }
      this.length++
      return this
    }
    /* 
        - if the queue is empty return null
        - if the queue has one node
            * create a new variable and assign the value of first proprty
            * set the first and last property null
        - else 
            * assign the value of the first node on the new varaible
            * assign the first to be the next node
        - decrement the length
        - return the object
    */
    dequeue(){
        if(!this.first) return null
        var node;
        if(this.length===1){
            node = this.first;
            this.first = null;
            this.last = null;
        }
        else{
            node = this.first;
            this.first = this.first.next;
        }
        this.length--;
        return node;
    }
}

var queue = new Queue();
queue.enqueue('Dawit')
queue.enqueue('Ayele')
queue.enqueue('Woldegebreal')
queue.enqueue('jiji')
queue.enqueue('tom')
queue.enqueue('Sam')


// In queue
//  inseraiton O(1)
//  deletion O(1)
//  search O(n)
//  access O(n)