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
    
    H.forEach(item => {
        console.log(stack.getStack())
        if(stack.getSize() > 0){
            while(stack.getSize() > 0){
                if(item < stack.getEnd()){
                    stack.pop()
                } else if(item == stack.getEnd()){
                    break
                }
                else if(item > stack.getEnd()){
                    stack.push(item)
                    answer++
                    break
                }
            }
            
            if(stack.getSize() == 0){
                answer++
                stack.push(item)
            }
                
        }else{
            stack.push(item)
            answer++
        }
    })
    
    return answer
}
