def max_sequence(arr):
    max_sum = current = 0
    for num in arr:
        current = max(0, current + num)
        max_sum = max(max_sum, current)
    return max_sum