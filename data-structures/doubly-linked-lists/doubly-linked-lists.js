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
    // Se the prev property of the popped node to be null
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

    // shift - removes the first node from the list
    // If the list is empty, return undefined
    // Store the current head in a variable to return later
    // If the list has only one node, set the head and tail to null
    // Otherwise, update the head to be the next node of the current head
    // Set the new head's previous property to null
    // Set the removed node's next property to be null
    // Decrement the length by 1
    // Return the removed node
    shift() {
        if(!this.head) return undefined;

        const removedNode = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }

        this.length --;
        return removedNode;
    }

    // unshift - add a new node to the beginning of the list
    // Create a new node with the value passed to the function
    // If the list is empty, set the head and tail to be the new node
    // Otherwise, set the prev property on the head of the list to be the new node
    // Set the next property on the new node to be the head property
    // Update the head to be the new node
    // Increment the length
    // Return the list
    unshift(val) {
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length ++;
        return this;
    }

    // get - accesses a node by its position
    // If the index is less than 0 or greater or equal to the length, return null
    // If the index is less than or equal to half the length of the list,
    //  - Loop through the list starting from the head towards the middle
    //  - Return the node once it is found
    // If the index is greater than half the length of the list
    //  - Loop through the list starting from the tail towards the middle
    //  - Return the node once it is found
    get(index) {
        if(index < 0 || index >= this.length) return null;

        let count = 0;
        let current = this.head;
        if(index <= this.length / 2){
            while(count != index) {
                current = current.next;
                count ++;
            }

            return current;
        }

        count = this.length - 1;
        current = this.tail;

        while(count != index){
            console.log(current)
            current = current.prev;
            count --;
        }
        return current;
    }

}

const list = new DoublyLinkedList();