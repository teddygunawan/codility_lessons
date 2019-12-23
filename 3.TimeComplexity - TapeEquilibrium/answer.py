# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 3.6
    
    # For Left Side Minus Right Side
    leftSide = A[0]
    rightSide = sum(A[1:])
    
    # For Right Side Minus Left Side
    reverseLeftSide = sum(A[:-1])
    reverseRightSide = A[-1]
    
    # Initiate the answer variable
    ans = abs(leftSide - rightSide)
    
    for i in range(1, len(A)):
        # Absolute difference of left side to right side
        absDiff = abs(leftSide - rightSide)
        if(absDiff < ans):
            ans = absDiff

        # Absolute Difference of right side to left side
        absDiff = abs(reverseRightSide - reverseLeftSide)
        if(absDiff < ans):
            ans = absDiff
        
        # Increment the total
        leftSide += A[i]
        rightSide -= A[i]
        
        # Increment the reversed total
        reverseLeftSide -= A[-i-1]
        reverseRightSide += A[-i-1]
    return ans
