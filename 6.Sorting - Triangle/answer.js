// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b) => a - b)
    for(let i = 0; i < A.length-2; i++){
        if(A[i] + A[i+1] > A[i+2]){
            if(A[i+1] + A[i+2] > A[i] && A[i] + A[i+2] > A[i+1]){
                return 1
            
            }
        }
    }
    
    return 0
}
