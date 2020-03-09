// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let ans = {}
    for (val of A){
        ans[val] = undefined
    }
    let index = 1
    for (key in ans) {
        if(key > index)
            return index
        else if(index > key)   
            continue
        else 
            index++
    }
    return index
}
