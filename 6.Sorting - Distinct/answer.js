// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let arrSize = A.length
    let answer = {}
    for (let i = 0; i < arrSize; i++) {
        answer[A[i]] = true;
    }
    return Object.keys(answer).length 
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution2(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrSize = A.length
    let answer
    if (arrSize == 0) {
        answer = 0
    } else {
        answer = 1;
        A.sort()
        for (let i = 0; i < arrSize - 1; i++) {
            if (A[i] != A[i + 1])
                answer += 1

        }
    }

    return answer
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution3(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let numSet = new Set()
    for(val of A){
        numSet.add(val)
    }
    return numSet.size
}

