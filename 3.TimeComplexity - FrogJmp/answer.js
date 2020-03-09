// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let ans = parseInt((Y-X) / D)
    X += D * ans
    if(X < Y)
        ans += 1
    return ans
}
