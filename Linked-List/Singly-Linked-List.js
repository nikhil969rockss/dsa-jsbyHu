//node --> { value: 1,next:null
//              }

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
    // creating a new node
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return newNode;
  }
  pop() {
    let temp = this.head;
    let prev = this.head;
    if (!this.head) {
      return undefined;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return temp;
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
    let temp = this.head;
    if (!this.head) return undefined;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) return (this.tail = null);
    return temp;
  }
}
const linkedList = new LinkedList(2);

// PUSH: creating a new node and connecting it to the previous tail next and pointing tail to the new node
linkedList.push(10);
linkedList.push(20);
//console.log(linkedList);

// POP: Removing the last node/element of the list and tail becomes previous element/node and it's tail.next pointing towards null
linkedList.pop();
//console.log(linkedList);

// Unshift: Pushing first node/element in the beginning of the list
linkedList.unshift(100);
console.log(linkedList);

// Shift : Removing first node/element from the beginning of the list
linkedList.shift();
console.log(linkedList);
