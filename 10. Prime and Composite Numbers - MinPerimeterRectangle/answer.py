# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(n):
    # write your code in Python 3.6i = 1
    if(n == 1):
        return 2 * (1 + 1)
    result = []
    i = 1
    while (i * i < n):
        if (n % i == 0):
            result.append(i)
            result.append(int(n / i))
        i += 1
    if (i * i == n):
        result.append(i)
    
    lastIndex = len(result)-1
    if(len(result) % 2 != 0):
        lowestPerimeter = 2 * (result[lastIndex] + result[lastIndex])
        return lowestPerimeter
    lowestPerimeter = 2 * (result[lastIndex-1] + result[lastIndex])
    return lowestPerimeter

