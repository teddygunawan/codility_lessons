// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let answer = []
    let nucleotides = {
        "A" : 0,
        "C" : 0,
        "G" : 0,
        "T" : 0
    }
    let nucleoPrefixSum = []
    for(const char of S){
        nucleoPrefixSum.push(Object.assign({}, nucleotides))
        nucleotides[char] += 1
    }
    
    let arrSize = P.length
    for (let i =0; i < arrSize; i++){
        if(nucleoPrefixSum[Q[i]]["A"] - nucleoPrefixSum[P[i]]["A"] > 0)
            answer.push(1)
        else if(nucleoPrefixSum[Q[i]]["C"] - nucleoPrefixSum[P[i]]["C"] > 0)
            answer.push(2)
        else if(nucleoPrefixSum[Q[i]]["G"] - nucleoPrefixSum[P[i]]["G"] > 0)
            answer.push(3)
        else
            answer.push(4)
    }
    
    return answer
}
