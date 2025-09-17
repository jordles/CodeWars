def exp_sum(n: int) -> int:
    if n < 0: return 0
    p = [1] + [0] * n
    for m in range(1, n + 1):
        k, total = 1, 0
        while True:
            g1, g2 = k*(3*k-1)//2, k*(3*k+1)//2
            if g1 > m: break
            sign = -1 if k % 2 == 0 else 1
            total += sign * p[m - g1]
            if g2 <= m: total += sign * p[m - g2]
            k += 1
        p[m] = total
    return p[n]