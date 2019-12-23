# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 3.6
    if(len(A) == 0):
        return 1

    ans = {i: 0 for i in range(1, max(A)+1)}
    for i in A:
        del ans[i]
        
    keys = list(ans.keys())
    if(len(keys) == 0):
        return A[len(A)-1] + 1
    return keys[0]
