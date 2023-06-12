const LinkedList = (head = null) => {
    
    const prepend = function(value) {
        const newNode = Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    return {head: head, prepend};
}

const Node = (value = null) => {
    return {value: value, next: null};
}

let node1 = Node(2);
let node2 = Node(5);
node1.next = node2;

const list = LinkedList(node1);
list.prepend(8);
console.log(list.head.value);
console.log(list.head.next.value)
console.log(list.head.next.next.value)
