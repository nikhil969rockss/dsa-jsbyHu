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
  getLast() {
    // return this.tail not a solution.. have to iterate from starting
    let node = this.head;
    if (!this.head) {
      return null;
    }
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return null;
  }
}
const linked = new LinkedList(10);
linked.push(20);
linked.push(30);
console.log(linked);
console.log(linked.getLast());
//console.log(linked);

//getLast: Finding the last element/node from the list
