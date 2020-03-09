// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (K > A.length)
        K = K % A.length
    if (K == A.length)
        return A
    let ans = [...A.slice(A.length - K), ...A.slice(0, A.length - K)]
    return ans
}
