# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(N, Q, B, C):
    # write your code in Python 3.6
    ball_colors = []
    for i in range(len(B)):
        ball_colors[B[i]][C[i]] += 1
        if(ball_colors[B[i]][C[i]] >= Q):
            return i

    return -1

if __name__== "__main__":
    print(solution(3, 2,  [1, 2, 0, 1, 1, 0, 0, 1], [0, 3, 0, 2, 0, 3, 0, 0]))
    print(solution(2, 2,  [0, 1], [5, 5]))
    print(solution(2, 2,  [0, 1, 0, 1, 0, 1], [1, 3, 0, 0, 3, 3]))