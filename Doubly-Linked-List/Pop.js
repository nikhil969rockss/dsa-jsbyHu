// POP: create a temporary variable and point it to the last element/node
// move the tail and point towards the prev one
// break the chain of nodes first tail.next
// finally break the last element prev

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
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = this.tail = null;
    }
    let removeNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode;
  }
}
const list = new DoublyLinkedList(12);
list.push(10);
list.push(20);
list.pop();
console.log(list);
