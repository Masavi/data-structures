class Stack {
  constructor(){
    this.count = 0;
    this.storage = {};
  }

  // Adds a value onto the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value a the end of the stack
  pop() {
    if (!this.count) return undefined;
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }  

  peek() {
    return this.storage[this.count - 1];
  }
}

const myStack = new Stack();

myStack.push("uno");
myStack.push("dos");
console.log(myStack.size());
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.size());
myStack.push("tres");
console.log(myStack.peek());
console.log(myStack.size());