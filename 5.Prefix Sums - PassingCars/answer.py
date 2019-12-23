# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 3.6
    # number of (0 / travelling east) cars at the moment
    prefixNum = 0
    
    # Number of passing cars
    ans = 0
    
    for i in A:
        if(i == 0):
            prefixNum += 1
        else:
            ans += prefixNum
    
    if(ans > 1000000000):
        return -1

    return ans
