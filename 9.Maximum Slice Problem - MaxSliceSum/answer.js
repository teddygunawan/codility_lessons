// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let currentMax = A[0]
    let highestMax = A[0]
    
    for (let i =0; i < A.length-1; i++){
        currentMax = Math.max(currentMax + A[i+1], A[i] + A[i+1])
        currentMax = Math.max(currentMax, A[i+1])
        highestMax = Math.max(currentMax, highestMax)
    }
    
    return highestMax
}
