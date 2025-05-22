// UNSHIFT: Adding a new node to beginning from the list
// first create a new node/element
// connect the newNode next to head prev
// headPrev = newNOde
// head = newNOde

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return newNode;
  }
}
const list = new DoublyLinkedList(12);
list.unshift(100);
console.log(list);
