//  node--> {  value: value,
//     next: null

// }

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
}
const linked = new LinkedList(23);
console.log(linked);
