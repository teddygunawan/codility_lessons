// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    max_ending = 0
    max_slice = 0
    let difference = []
    for(let i =0; i < A.length-1; i++){
        let difference = A[i+1] - A[i]
        max_ending = Math.max(0, max_ending+difference)
        max_slice = Math.max(max_slice, max_ending)
    }
    return max_slice
}
