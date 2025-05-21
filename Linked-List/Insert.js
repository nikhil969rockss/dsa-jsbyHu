// Insert: First create a new Node
// find where you want to insert (before element ) index - 1
// pointing the before element next to this node
// and newNode next to it's next

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
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  get(index) {
    let counter = 0;
    let node = this.head;
    if (!this.head) return null;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }
  insert(index, value) {
    //create a new element/node
    let newNode = new Node(value);
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    // finding the index - 1 --> previous node/element
    let node = this.get(index - 1);

    newNode.next = node.next;
    node.next = newNode;
    this.length++;
    return true;
  }
}
const list = new LinkedList(12);
list.push(10);
list.push(20);
list.insert(0, "this is new");
console.log(list);
