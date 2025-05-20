class ArrayMaker {
  constructor() {
    this.array = [];
    this.length = 0;
    this.array.length = this.length;
  }
  push(element) {
    this.array[this.length] = element;
    this.length++;
  }
  get(index) {
    return this.array[index];
  }
  pop() {
    delete this.array[this.length - 1];
    this.array.length = this.length - 1;
    this.length--;
  }
  unshift(item) {
    //[1,2,3,4,5] [1,1,2,3,4,]
  }
  shift() {
    const firstElement = this.array[0];
    // re-indexing
    for (let i = 0; i < this.array.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    delete this.firstElement;
    this.array.length = --this.length;
  }
}
const arr = new ArrayMaker();
console.log(arr);
// Push method where we add an element to the end of the array
arr.push("mango");
arr.push("apple");
arr.push("banana");
arr.push("grapes");
console.log(arr.get(3));
console.log(arr);
// Pop method where we remove the last element from the array
arr.pop();
console.log(arr);
// unshift--> puts one element in the beginning of the array
// TODO: unshift method
arr.shift();
console.log(arr);
