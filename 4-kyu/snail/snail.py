def snail(snail_map):
    result = []
    while snail_map:
        # take the top row
        result += snail_map.pop(0)
        # take the right column
        if snail_map and snail_map[0]:
            for row in snail_map:
                result.append(row.pop())
        # take the bottom row (reversed)
        if snail_map:
            result += snail_map.pop()[::-1]
        # take the left column (reversed)
        if snail_map and snail_map[0]:
            for row in snail_map[::-1]:
                result.append(row.pop(0))
    return result