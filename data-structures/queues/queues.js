// A Queue is an abstract data structure that follow the FIFO (First In First Out) principle

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // enqueue - adds a node to the queue
    // This function accepts some value
    // Create a new node using the value passed to the function
    // If the queue is empty, set the newly-created node to be the first and last property of the queue
    // Otherwise:
    //  - Set the next property of the current last node to be the newly-created node
    // - Set the last property of the queue to be the newly-created node
    // Increment the size by 1 and return
    enqueue (val) {
        const newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    // dequeue - removes the first node (first in) from the queue
    // If the queue is empty, return null
    // Store the first property in a variable called removedNode
    // If there is only one node in the queue, set the first and last properties to be null
    // Otherwise:
    // - Store the next property of the first node in a variable
    // - Set the first property of the queue to be the above-stored variable
    // - Set the next property of removedNode to be null
    // Decrement the size by 1
    // Return the value of the removed node
    dequeue () {
        if(!this.first) return null;
        
        const removedNode = this.first;

        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            const newFirst = this.first.next;
            this.first = newFirst;
            removedNode.next = null;
        }

        this.size --;
        return removedNode.val;
    }
}