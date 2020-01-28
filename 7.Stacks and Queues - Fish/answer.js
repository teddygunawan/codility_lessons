// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

class Queue{
    constructor(){
        this.queue = []
        this.queueSize = 0
    }
    
    push(item){
        this.queue.push(item)
        this.queueSize += 1
    }
    
    pop(){
        this.queue.pop()
        this.queueSize -= 1
    }
    
    getQueue(){
        return this.queue
    }
    
    getSize(){
        return this.queueSize
    }
    
    getEnd(){
        return this.queue[this.queueSize-1]
    }
}


function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let queue = new Queue()
    let arrSize = A.length
    let fishNum = A.length
    let i = 0
    while(i < arrSize){
        if(B[i] == 1)
            queue.push(A[i])
        else{
            while(queue.getSize() > 0 && B[i] == 0){
                fishNum -= 1
                if(A[i] > queue.getEnd())
                    queue.pop()
                else
                    break
            }
        }
        
        i++
    }
    
    return fishNum
}
