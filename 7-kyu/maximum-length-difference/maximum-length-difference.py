def mxdiflg(a1, a2): # O(n+m)
    if not a1 or not a2:
        return -1
    len1 = [len(s) for s in a1]
    len2 = [len(s) for s in a2]
    return max(abs(max(len1) - min(len2)), abs(max(len2) - min(len1)))