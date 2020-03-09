// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort( function(a,b) { return a - b; } )
    let arrSize = A.length
    
    /* Obviously try to multiply from the array in highest order applicalble to all negative and all positive*/
    let answer = A[arrSize - 1] * A[arrSize - 2] * A[arrSize - 3];
    
    /* If the lowermost two negative multiply a positive is bigger */
    if(A[0] * A[1] * A[arrSize - 1] > answer)
        answer = A[0] * A[1] * A[arrSize - 1]
    
    
    return answer
}
