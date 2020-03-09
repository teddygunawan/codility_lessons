// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leafSet = new Set()
    
    for (i in A){
        leafSet.add(A[i])
        if(leafSet.size >= X)
            return parseInt(i)
    }
    
    return -1
}
