// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let left = 0, right = A.length-1
    let numSet = new Set()
    while(left <= A.length/2){
        numSet.add(Math.abs(A[left]))
        numSet.add(Math.abs(A[right]))
        left++
        right--
    }
    
    return numSet.size
}
