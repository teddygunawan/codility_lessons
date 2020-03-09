# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 3.6
    A.sort()
    if(len(A) == 0):
        return 0
    ans = 1
    for i in range(1, len(A)):
        if(A[i] != A[i-1]):
            ans += 1 
    
    return ans
    pass
