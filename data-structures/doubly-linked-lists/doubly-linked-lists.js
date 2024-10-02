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

    // set - replaces the value of a specific node on the list
    // Create a variable which is the result of the get method at the index passed to the function
    // If the get method returns a valid node, set the value of that node to be the value passed to the function, the return true
    // Otherwise, return false
    set(index, val){
        const foundNode = this.get(index);

        if(foundNode){
            foundNode.val = val;
            return true;
        }
        
        return false;
    }

    // Insert - adds a node to a specific position in a Doubly Linked List
    // If the index is less than zero or greater than the length, return false
    // If the index is 0, unshift
    // If the index is the same as the length, push
    // Otherwise:
    //  - Use the get method to access the index -1
    //  - Set the next and prev properties on the correct nodes to link everything together
    // Increment the length
    // Return true
    insert(index, val) {
        if(index < 0 || index > this.length) return false;

        if(index === 0) return !!this.unshift(val);

        if(index === this.length ) return !!this.push(val);

        const newNode = new Node(val);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        newNode.next = afterNode;
        afterNode.prev = newNode;
        newNode.prev = beforeNode;
        beforeNode.next = newNode;

        this.length ++;
        return true;
    }

    // remove - removes the node at a specific position in a Doubly Linked List
    // If the index is less than 0 or greater than the length of the list, return null;
    // If the index is equal to 0, shift
    // If the index is equal to the length - 1, pop
    // Otherwise:
    // - use the get method to retrieve the item to be removed
    // - Update the next and prev properties to remove the found node from the list
    // - Set next and prev to null on the found node
    // Decrement the length by 1
    // Return removed node

    remove(index){
        if(index < 0 || index >= this.length) return null;
        
        if(index === 0) return this.shift();

        if(index === this.length - 1) return this.pop();

        const removedNode = this.get(index);
        const beforeNode = removedNode.prev;
        const afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;

        this.length --;
        return removedNode;
    }
}