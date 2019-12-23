# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(X, A):
    # write your code in Python 3.6
    leafs = {i: None for i in range(1, X+1)}
    for idx, i in enumerate(A):
        if(i in leafs):
            del leafs[i]
            if(len(leafs) <= 0 ):
                return idx
    
    return -1
