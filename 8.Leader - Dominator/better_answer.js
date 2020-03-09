// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

class Stack{
    constructor(){
        this.stack = []
        this.numOccur = {}
        this.index = -1
    }
    
    push(el, idx){
        if(!(el in this.numOccur))
            this.numOccur[el] = 0
        
        this.numOccur[el] += 1
        if(this.length() > 0 && this.last() != el){
            this.stack.pop()
        }
        else{
            this.stack.push(el)
            this.index = idx
        }
        
    }
    
    last(){
        return this.stack[this.length()-1]
    }
    
    length(){
        return this.stack.length
    }
    
    getOccurIndex(){
        return this.index
    }
    
    getStart(){
        return this.stack[0]
    }
    
    getOccurence(num){
        return this.numOccur[num]
    }
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack = new Stack()
    for(i in A){
        stack.push(A[i], i)
    }
    return stack.length() > 0 && stack.getOccurence(stack.getStart()) > parseInt(A.length / 2) ? parseInt(stack.getOccurIndex()) : -1
}
