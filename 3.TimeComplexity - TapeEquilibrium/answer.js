
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min = Math.pow(10, 10)
    let leftSide = A[0]
    let rightSide = A.slice(1).reduce((a, b) => a + b)
    
    for (let i=1; i < A.length; i++){
        let absValue = Math.abs(leftSide - rightSide)
        if(absValue < min)
            min = absValue
        
        leftSide += A[i]
        rightSide -= A[i]
    }
    
    return min
}
