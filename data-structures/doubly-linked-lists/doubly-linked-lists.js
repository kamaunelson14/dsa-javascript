class Node {
    constructor(val){
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push - adds a new node to the end of the list
    // create a new node with the value passed to the function
    // If there are no nodes on the list, set the head and tail to be the newly created node
    // If not, set the next property on the tail to be that node
    // Set the previous property on the newly created node to be the tail
    // Set the tail to be the newly created node
    // Increment the length by 1
    // Return the Doubly Linked List
    push(val) {
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length ++;
        return this;
    }

    // pop - removes the last node from the list
    // If the list is empty, return undefined
    // Store the current tail in a variable to return later
    // If the list has only one node, set the head and tail to null
    // Otherwise, update the tail to be the previous node of the current tail
    // Set the new tail's next property to null
    // Decrement the length by 1
    // Return the removed node

    pop() {
        if(!this.head) return undefined;

        const poppedNode = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length --;
        return poppedNode;
    }

}

const list = new DoublyLinkedList();