const LinkedList = (head = null) => {
    
    const append = function(element) {
        const lastNode = Node(element);
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = lastNode;
    }

    const prepend = function(element) {
        const firstNode = Node(element);
        firstNode.next = this.head;
        this.head = firstNode;
    }

    const size = function() {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode) {
            counter++
            currentNode = currentNode.next;
        }
        return `Size: ${counter}`;
    }

    const getTail = function() {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    const at = function(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    return {head: head, prepend, append, size, getTail, at};
}

const Node = (value = null) => {
    return {value: value, next: null};
}

let node1 = Node(2);
let node2 = Node(5);
node1.next = node2;

const list = LinkedList(node1);
list.prepend(8);
list.append(9);
console.log(list.head.value);
console.log(list.head.next.value)
console.log(list.head.next.next.value)
console.log(list.head.next.next.next.value)
console.log(list.size());
console.log(list.getTail());
console.log(list.at(2));