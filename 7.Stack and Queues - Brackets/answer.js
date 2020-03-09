// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let closeCombination = {
    "{" : "}",
    "[" : "]",
    "(" : ")"
}

function isClosing(a, b){
    if(closeCombination[a] == b)
        return true 
    return false
}

class Stack {
  constructor() {
    this.stack = []
    this.stackSize = 0
  }
  
  push(item){
    this.stack.push(item)
    this.stackSize += 1
      
  }
  
  pop(){
    this.stack.pop()
    this.stackSize -= 1
  }
  
  checkClosing(){
    if(closeCombination[this.stack[this.stackSize-2]] == this.stack[this.stackSize-1]){
        this.pop()
        this.pop()
    }
  }
  
  getStack(){
      return this.stack
  }
}
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrSize = S.length
    let stack = new Stack()
    for(let i =0; i < arrSize; i++){
        stack.push(S.charAt(i))
        stack.checkClosing()
    }
    
    if(stack.getStack().length == 0)
        return 1
    return 0
}
