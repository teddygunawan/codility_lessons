# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")


def solution(A):
    # write your code in Python 3.6
    currentMin = 100000
    ans = 0
    for i in range(len(A)-1):
        # Check two slices
        currentSum = A[i] + A[i+1]
        avgSum = (currentSum / 2)
        if(avgSum < currentMin):
            currentMin = avgSum
            ans = i
            
        # Check three slices (It is possible for three slices to have lower average than two slice). There is no need to check further slices as it can be composed of the two and three slices.
        if(i + 2 < len(A)):
            avgSum = ((currentSum + A[i+2]) / 3)
            if(avgSum < currentMin):
                ans = i
                currentMin = avgSum

    return ans
