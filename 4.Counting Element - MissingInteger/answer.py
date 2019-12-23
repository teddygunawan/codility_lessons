# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 3.6
    numbers = {i: None for i in range(1, len(A)+1)}
    for i in A:
        if(i in numbers):
            del numbers[i]
    
    if(len(numbers) == 0):
        return len(A)+1
    return min(numbers)