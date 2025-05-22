class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  getFirst() {
    return this.head.value;
  }
}
const linked = new LinkedList(10);
linked.push(140);
linked.push(210);
linked.push(220);

// getFirst: Finding the first element/node from the list
console.log(linked.getFirst());

console.log(linked);
