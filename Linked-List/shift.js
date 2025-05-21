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
  shift() {
    let node = this.head;
    if (!this.head) {
      return undefined;
    }
    if (this.length === 0) {
      this.tail = null;
    }
    this.head = this.head.next;
    node.next = null;

    this.length--;
    return node;
  }
}
const linked = new LinkedList(14);
linked.unshift(100);
linked.unshift(200);
console.log(linked);
console.log(linked.shift());
console.log(linked);
// SHIFT: Removing first node/element from the list

// storing head in the temporary variable
//
