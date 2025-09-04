def same_structure_as(a, b):
    if isinstance(a, list) and isinstance(b, list):
        return len(a) == len(b) and all(same_structure_as(x, y) for x, y in zip(a, b))
    return not isinstance(a, list) and not isinstance(b, list)