class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push - adds a new node to the end of the list
    // Create a new node using the value passed to the function
    // If there is not head property on the list, set the thead and tail to be the newly created node
    // Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node

    push(val){
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // pop - removes the last node from the list
    // If there are no nodes in the list, return undefined
    // Loop through the list until you reach the tail
    // Set the next property of the second last node to be null
    // Set the tail to be the 2nd last node
    // Decrement the length of the list by 1
    // Return the value of the node removed
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // shift - removes the first node from the list
    // If there are no nodes in the list, return undefined
    // Store the current head property in a variable
    // Set the head property to be the current head's next property
    // Decrement the length by 1
    // Return the value of the node removed
    shift(){
        if(!this.head) return undefined;

        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }

        return currentHead;
    }

    // unshift - adds a new node to the beginning of the list
    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise, set the newly created node's next property to be the current head property on the list
    // Set the head property on the list to be that newly created node
    // Increment the length of the list by 1
    // Return the linked list
    unshift(val){
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length ++;
        return this;
    }

    // get - fetches the node at an index
    // If the length of the list is negative, greater than or equal to the index, return null
    // Otherwise, loop through the list until you find the property at the specified index
    // Return the node at the specified index
    get(index){
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;
        while(counter < index){
            current = current.next;
            counter ++;
        }

        return current;
    }

    // set - sets the value of a node based on its position in the linked list
    // Use the get function to find the specific node
    // If the node is not found, return false
    // If the node is found, set the value of that node to be the value passed to the function and return true
    set(index, val){
        const node = this.get(index);

        if(node){
            node.val = val;
            return true;
        }

        return false;
    }

    // insert - inserts a node into the list at a specific position
    // If the index is less than zero or greater than the length, return false
    // If the index is the same as the length, push a new node to the end of the list
    // If the index is 0, unshift a new node to the start of the list
    // Otherwise, using the get method, access the node at (index - 1)
    // Set the next property on that node to be the new node
    // Increment the length
    // Return true
    insert(index, val){

        if(index < 0 || index > this.length) return false;

        if(index === this.length) return !!this.push(val);

        if(index === 0) return !!this.unshift(val);
        
        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;

        this.length ++;
        return true;
    }

    // remove - removes a node from the list at a specific position
    // If the index is less than zero or greater than the length, return undefined
    // If the index is the same as the length-1, pop
    // If the index is 0, shift
    // Otherwise, using the get method, access the node at (index - 1)
    // Set the next property on that node to be teh next of the next node
    // Decrement the length
    // Return the value of the node removed
    remove(index){
        if(index < 0 || index > this.length) return undefined;

        if(index === 0) return this.shift();

        if(index === this.length - 1) return this.pop();

        const prevNode = this.get(index - 1);
        const removed = prevNode.next;

        prevNode.next = removed.next;
        this.length --;
        return removed;
    }

    // reverse - reverses the order of nodes in the list in place
    // Swap the head and tail
    // Create a variable called next
    // Create a variable called previous
    // Create a variable called node and initialize it to the head property
    // Loop through the list
    // Set next to be the next property on whatever node is 
    // Set prev to be the value of the node variable
    // Set the node variable to be the value of the next variable
    reverse(){

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}