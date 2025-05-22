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
  }
  unshift(value) {
    // creating a new node/element
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // pointing new node next to the current head

    newNode.next = this.head;
    // pointing head to new Node
    this.head = newNode;
  }
}
//UNSHIFT: adding one node/element to the first of the list

const linked = new LinkedList(13);
linked.unshift(100);
console.log(linked);
