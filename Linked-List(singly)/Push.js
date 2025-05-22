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
  push(value) {
    // creating a new node
    let newNode = new Node(value);
    // checking if the list is empty or not
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // change the next of the tail element to this new
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

const linked = new LinkedList(30);
console.log(linked);

// PUSH--> Adding one node/element in the last of the list
linked.push(40);
console.log(linked);
