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
  size() {
    // ? we can return this.length
    // we iterate from the link list to get the number

    let counter = 0;
    let countingNode = this.head;
    while (countingNode) {
      counter++;
      countingNode = countingNode.next;
    }
    return counter;
  }
}
const list = new LinkedList(1);
list.push(2);
list.push(3);
console.log(list);
console.log(list.size());
