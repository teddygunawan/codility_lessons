# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 3.6
    ans = 0
    A.sort()
    i = 0
    while i+1 < len(A):
        if(A[i] != A[i+1]):
            ans = A[i]
            break
        else:
            i += 2
    
    if(ans == 0):
        ans = A[i]
    return ans
