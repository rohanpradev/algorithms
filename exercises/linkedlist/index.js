// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let temp = this.head;
        while (temp) {
            ++count;
            temp = temp.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let temp = this.head;
        while (temp) {
            if (!temp.next) {
                return temp;
            }
            temp = temp.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        let temp = this.head;
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return
        }
        while (temp) {
            if (!temp.next.next) {
                temp.next = null;
                return;
            }
            temp = temp.next;
        }
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = new Node(data);
    }

    getAt(index) {
        let temp = this.head;
        let counter = 0;
        if (!this.head) {
            return null;
        }

        while (temp) {
            if (counter === index) {
                return temp;
            }
            ++counter;
            temp = temp.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next
            return;
        }


        if (index > this.size() - 1) {
            return;
        }
        const prev = this.getAt(index - 1);
        prev.next = prev.next.next;
    }

    insertAt(data, index) {
        // if ll doesnt exist
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        // this part is to hadle array out of bounds exception
        if (index > this.size() - 1) {
            this.getAt(this.size() - 1).next = new Node(data);
            return;
        }
        let prev = this.getAt(index - 1);
        if (prev) {
            // normal case where previous node exists
            let temp = prev.next;
            prev.next = new Node(data, temp);
        } else {
            // special case where previous node doesnt exist. Eg: insertion at 0 index
            this.head = new Node(data, this.head);
        }

    }


    forEach(func) {
        if (!this.head) {
            return;
        }
        let temp = this.head;
        let counter = 0;
        while (temp) {
            func(temp, counter);
            temp = temp.next;
            ++counter;
        }
    }


    // using generators
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }

    }
}

module.exports = { Node, LinkedList };


