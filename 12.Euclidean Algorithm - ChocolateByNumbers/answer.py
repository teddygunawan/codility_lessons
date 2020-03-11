# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")
def gcd(a, b):
    if a % b == 0:
        return b
    else:
        return gcd(b, a % b)
        
# Explanation: It has something to do with the math property, found it
# by trying out different values and found the pattern where the answer
# is always (higherValues / commonDivisor)
def solution(N, M):
    # write your code in Python 3.6
    commonDivisor = gcd(N, M)
    return N // commonDivisor
