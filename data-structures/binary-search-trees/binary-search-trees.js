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
}
