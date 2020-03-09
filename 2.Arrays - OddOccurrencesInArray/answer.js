// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let occured = new Set()
    for(i of A)
        if(occured.has(i))
            occured.delete(i)
        else
            occured.add(i)
    return [...occured][0]
}
