# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(X, Y, D):
    # write your code in Python 3.6
    ans = 0
    ans += int((Y-X) / D)
    X += D * int((Y-X) / D)
    if(X < Y):
        ans += 1
    return ans