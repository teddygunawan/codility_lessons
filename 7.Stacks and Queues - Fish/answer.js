// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

class Stack{
    constructor(){
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
    
    getstack(){
        return this.stack
    }
    
    getSize(){
        return this.stackSize
    }
    
    getEnd(){
        return this.stack[this.stackSize-1]
    }
}


function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack = new Stack()
    let arrSize = A.length
    let fishNum = A.length
    let i = 0
    while(i < arrSize){
        if(B[i] == 1)
            stack.push(A[i])
        else{
            while(stack.getSize() > 0 && B[i] == 0){
                fishNum -= 1
                if(A[i] > stack.getEnd())
                    stack.pop()
                else
                    break
            }
        }
        
        i++
    }
    
    return fishNum
}
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution2(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack = []
    let fishNum = A.length
    for(i in A){
        if(B[i] == 1){
            stack.push(A[i])
        }else{
            while (stack.length > 0){
                if(stack.length > 0){
                    if(stack[stack.length-1] > A[i]){
                        fishNum -= 1
                        break
                    }
                    else{
                        fishNum -=1
                        stack.pop()
                    }
                }
            }
        }
    }
    
    return fishNum
}
