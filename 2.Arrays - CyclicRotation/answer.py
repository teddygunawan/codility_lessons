# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A, K):
    # write your code in Python 3.6
    ans = [0] * len(A)
    if(len(A) == 0):
        return A
    if(K > len(A)):
        K = K % len(A)
    for i in range(K, len(A)):
        ans[i] = A[i-K]
    for i in range(0, K):
        ans[i] = A[i-K]
    return ans
