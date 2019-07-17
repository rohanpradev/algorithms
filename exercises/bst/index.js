// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }


    insert(data) {
        if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        } else if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        }
        if (this.data > data && this.left) {
            return this.left.contains(data);
        } else if (this.data < data && this.right) {
            return this.right.contains(data);
        }
        return null;
    }

    nosiblings() {
        const arr = [];
        const nosib = [];
        if (this.left && this.right) {
            arr.push(this.left);
            arr.push(this.right);
        } else if (this.left) {
            arr.push(this.left);
            nosib.push(this.left);
        } else if (this.right) {
            arr.push(this.right);
            nosib.push(this.right);
        }

        while (arr.length) {
            const newn = arr.shift();

            if (newn.left !== null && newn.right !== null) {
                arr.push(newn.left);
                arr.push(newn.right);
            } else {

                if (this.left !== newn && this.right !== newn) {
                    nosib.push(newn.data);
                }
                if (newn.left) {
                    arr.push(newn.left);
                }
                if (newn.right) {
                    arr.push(newn.right);
                }
            }
        }
        return nosib;
    }
}

module.exports = Node;
