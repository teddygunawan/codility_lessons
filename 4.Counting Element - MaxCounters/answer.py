# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(N, A):
    # write your code in Python 3.6
    NPlusOne = N + 1
    counters = [0] * N
    maxVal = 0
    last_max = 0
    for i in A:
        if(i == NPlusOne):
            last_max = maxVal
        else:
            if(counters[i-1] + 1 > last_max):
                counters[i-1] += 1
            else:
                counters[i-1] = last_max + 1
                
            if(counters[i-1] > maxVal):
                maxVal = counters[i-1]
                
    for i in range(len(counters)):
        if(counters[i] < last_max):
            counters[i] = last_max
    return counters
