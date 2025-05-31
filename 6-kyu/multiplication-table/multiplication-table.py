def multiplication_table(size):
    return [[(i + 1) * (j + 1) for j in range(size)] for i in range(size)]