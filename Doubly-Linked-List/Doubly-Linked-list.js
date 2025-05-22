// doubly linked list just have an extra node which is pointing prev
// {  value: 1
//       next: null   --------> whole structure of a node
//       prev: null
//    }

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }
}
const doubly = new DoublyLinkedList(1);
console.log(doubly);
