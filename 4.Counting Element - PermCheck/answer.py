# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 3.6
    intDict = {i: None for i in range(1, len(A)+1)}
    
    for i in A:
        if(i in intDict):
            del intDict[i]
        else:
            return 0
    if(len(intDict) > 0):
        return 0
        
    return 1
