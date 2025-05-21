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
  pop() {
    let node = this.head; // creating temporary variable that pointing towards head
    let prevNode = this.head; // second variable that pointing towards head
    if (!this.head) return undefined;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    while (node.next) {
      // checking the list if it finds the last element
      prevNode = node;
      node = prevNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;

    this.length--;
    return node;
  }
}

const linked = new LinkedList(33);
linked.push(100);
linked.push(200);
console.log(linked);
console.log(linked.pop());
console.log(linked);

// Pop--> Removing last node/element from the list by creating two temporary variable which pointing towards head. one will move forward iterating through each node by check if next is pointing towards a node or not.. until finds the last element which pointing towards null
