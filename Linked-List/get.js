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
  get(index) {
    let counter = 0;
    let node = this.head;
    if (!this.head) {
      return null;
    }
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }
}
const linked = new LinkedList(12);
linked.push(100);
linked.push(200);
linked.push(300);
console.log(linked);
console.log(linked.get(2));
//console.log(linked);
