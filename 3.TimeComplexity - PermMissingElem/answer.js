// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length + 1
    let partialSum = (N *(N + 1))/2
    const sum = A.reduce((a, b) => a + b, 0);
    
    return partialSum - sum
}
