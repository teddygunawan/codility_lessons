// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let curDivisible = A;
    while(curDivisible <= B){
        if(curDivisible % K == 0)
            break
        else
            curDivisible += 1
    }
    
    return Math.floor((B - curDivisible) / K) + 1
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A % K == 0)
        return parseInt( (B-A) / K) +1
    else
        return parseInt((B - (A - A % K)) / K) 
}
