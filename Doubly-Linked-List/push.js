// PUSH: In push method first create a new node
// point

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;

    this.length++;
    return this;
  }
}
const list = new DoublyLinkedList(10);
list.push(23);
console.log(list);
