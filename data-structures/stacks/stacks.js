// A stack is an abstract data structure that follows the LIFO (Last In First Out) principle

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push - adds a node to the stack
    // The function should accept a value
    // Create a new node with the value provided
    // If there are no nodes in the stack, set the first and last properties to be the newly-created node
    // Otherwise, set the next property of the newly-created node to be the first property of the stack
    // Set the first property of the stack to be the newly-created node
    // Increment the size of the stack by 1 and return 
    push (val) {
        const newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        return ++this.size;
    }

    // pop - removes a node (last in) from the stack
    // If there are no nodes in the stack, return null
    // Create a temporary variable to store the first property on the stack
    // If there is only 1 node, set the first and last properties to be null
    // Otherwise:
    // - Set the first property to be the next property on the current first
    // - Remove the next property on the stored variable
    // Decrement the size of the stack by 1
    // Return the value of the removed node
    pop () {
        if(!this.first) return null;

        const removedNode = this.first;
        
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            removedNode.next = null;
        }

        this.size --;
        return removedNode.val;
    }
}