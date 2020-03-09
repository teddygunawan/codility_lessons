// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let ans = 0
    let eastCar = 0
    for (val of A){
        if(val == 0)
            eastCar++
        else
            ans += eastCar
    }
    if(ans > 1000000000)
        return -1
    return ans
}
