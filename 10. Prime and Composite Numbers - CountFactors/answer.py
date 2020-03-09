# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(n):
    # write your code in Python 3.6i = 1
    result = 0
    i = 1
    while (i * i < n):
        if (n % i == 0):
            result += 2
        i += 1
    if (i * i == n):
        result += 1
    return result

