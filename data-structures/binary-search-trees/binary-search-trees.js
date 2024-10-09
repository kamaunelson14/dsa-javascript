class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    // insert - adds a node to the Binary Search Tree
    // Create a new node
    // Starting at the root:
    // - Check if there is a root. If not, the root now becomes that new node
    // - If there is a root, check if the value of the new node is greater than or less than the value of the root
    // - If it is greater:
    // -- Check to see if there is a node to the right
    // --- If there is, move to that node and repeat these steps
    // --- If there is not, add that node as the right property
    // - If it is less:
    // -- Check to see if there is a node to the left
    // --- If there is, move to that node and repeat these steps
    // --- If there is not, add that node as the left property

    insert (val) {
        const newNode = new Node(val);

        if(!this.root){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true) {
            if(val === current.val) return undefined;

            if(val > current.val){
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
        }
    }
    

    // get - retrieves a node from the BST based on its value
    // Starting at the root:
    // - Check if there is a root. If not, return null
    // - If there is a root: 
    // -- Check if the value of the new node is the value we are looking for.
    // --- If it is, return that node
    // --- If not, check to see if the value is greater than or less than the value of the root
    // - If it is greater:
    // -- Check to see of there is a node to the right
    // --- If there is, move to that node and repeat these steps
    // --- If there is not, we're done searching!
    // - If it is less:
    // -- Check to see if there is a node to the left
    // --- If there is, move to that node and repeat these steps
    // --- If there is not, we're done searching!

    get (val) {
        if (!this.root) return null;

        let current = this.root;
        while (true) {
            if (val === current.val) return current;

            if (val < current.val) {
                if (!current.left) {
                    return null;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    return null;
                }
                current = current.right;
            }
        }
    }

    // Breadth First Search 
    // Create a queue (this can be an array) and a variable to store the values of the nodes visited
    // Place the root node in the queue
    // Loop as long as there is anything in the queue
    // - Dequeue a node from the que and push the value of the node into the variable that stores the nodes
    // - If there is a left property on the node dequeued - add it to the queue
    // - If there is a right property on the node dequeued - add it to the queue
    BFS () {
        if (!this.root) return null; 

        const queue = [this.root];
        const visited = [];

        while (queue.length !== 0) {
            const current = queue.shift();
            visited.push(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return visited;
    }

    // Depth First Search - PreOrder
    // Create a variable to store the values of nodes visited
    // Write a helper function which accepts a node
    // - Push the value of the node to the variable that stores the values
    // - If the node has a left property, call the helper function with the left property on the node
    // - If the node has a right property, call the helper function with the right property on the node
    // Invoke the helper function with the root as the argument
    // Return the array of values
    DFSPreOrder () {
        const data = [];

        function traverse (node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    // Depth First Search - PostOrder
    // Create a variable to store the values of nodes visited
    // Write a helper function which accepts a node
    // - If the node has a left property, call the helper function with the left property on the node
    // - If the node has a right property, call the helper function with the right property on the node
    // - Push the value of the node to the variable that stores the values
    // Invoke the helper function with the root as the argument
    // Return the array of values
    DFSPostOrder () {
        const data = [];

        function traverse (node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }

        traverse(this.root);
        return data;
    }

    // Depth First Search - InOrder
    // Create a variable to store the values of nodes visited
    // Write a helper function which accepts a node
    // - If the node has a left property, call the helper function with the left property on the node
    // - Push the value of the node to the variable that stores the values
    // - If the node has a right property, call the helper function with the right property on the node
    // Invoke the helper function with the root as the argument
    // Return the array of values
    DFSInOrder () {
        const data = [];

        function traverse (node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }
        
        traverse(this.root);
        return data;
    }
}

