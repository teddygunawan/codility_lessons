# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(N):
    # write your code in Python 3.6
    
    # Convert to binary
    N = bin(N)[2:]
    binLength = []
    count = 0
    for i in N:
        if (i == str(0)):
            count += 1
        else:
            binLength.append(count)
            count = 0
    return max(binLength)
