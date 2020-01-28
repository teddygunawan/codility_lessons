// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


class Stack{
    constructor(){
        this.stack = []
        this.size = 0
    }
    
    push(item){
        this.stack.push(item)
        this.size++
    }
    
    pop(){
        let poppedItem = this.stack[this.size-1]
        this.stack.pop()
        this.size--
        return poppedItem
    }
    
    getEnd(){
        return this.stack[this.size-1]
    }
    
    getStart(){
        return this.stack[0]
    }
    
    getSize(){
        return this.size
    }
    
    getStack(){
        return this.stack
    }
}

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack = new Stack()
    let answer = 0
    let arrSize = H.length
    
    H.forEach(item =>{
        if(stack.getSize() > 0){
            if(stack.getEnd() == item){
                stack.push(item)
            }else{
                stack.pop()
            }
        }else
            stack.push(item)
    })
    
    let dominator = stack.getStart()
    let dominatorCount = 0
    let dominatorPrefixSum = []
    H.forEach((item, i) => {
        if(dominator == item)
            dominatorCount++
        
        dominatorPrefixSum.push(dominatorCount)
    })
    dominatorPrefixSum.forEach((item, i) => {
        if(item > Math.floor((i+1)/2) && dominatorPrefixSum[arrSize-1] - item > Math.floor((arrSize-i-1)/2))
            answer++
    })
    
    return answer
}
