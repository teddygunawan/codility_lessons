// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let answer = Array(N).fill(0);
    let maxCounterVal = 0;
    let currentMax = 0
    A.forEach(num => {
        index = num - 1
        if(num >= N + 1){
            maxCounterVal = currentMax
        }else{
            if(maxCounterVal > answer[index])
                answer[index] = maxCounterVal + 1
            else
                answer[index] += 1
            
            if(currentMax < answer[index])
                currentMax = answer[index]
        }
    })
    
    answer.forEach((num, index) => {
        if(answer[index] < maxCounterVal)
            answer[index] = maxCounterVal
    })
    
    return answer
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxCounter = 0
    let currentMax = 0
    let ans = new Array(N).fill(0)
    for (val of A){
        if(val > N){
            maxCounter = currentMax
        }else{
            let index = val -1
            if(ans[index] < maxCounter)
                ans[index] = maxCounter
            
            ans[index] += 1
            if(ans[index] > currentMax)
                currentMax = ans[index]
        }
    }
    ans = ans.map( val => {
        return val > maxCounter ? val : maxCounter
    })
    return ans
}
