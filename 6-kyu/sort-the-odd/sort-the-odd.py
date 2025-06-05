def sort_array(source_array):
    # Extract and sort the odd numbers
    sorted_odds = sorted([n for n in source_array if n % 2 != 0])
    
    # Replace odd numbers in original positions with sorted ones
    odd_index = 0
    result = []
    for n in source_array:
        if n % 2 != 0:
            result.append(sorted_odds[odd_index])
            odd_index += 1
        else:
            result.append(n)
    return result