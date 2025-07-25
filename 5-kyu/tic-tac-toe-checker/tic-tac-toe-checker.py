def is_solved(board):
    lines = (
        board +                                # Rows
        list(zip(*board)) +                    # Columns
        [[board[i][i] for i in range(3)],      # Diagonal
         [board[i][2 - i] for i in range(3)]]  # Anti-diagonal
    )
    
    for line in lines:
        if line.count(line[0]) == 3 and line[0] != 0:
            return line[0]  # Return winner (1 or 2)
    
    return -1 if any(0 in row for row in board) else 0  # -1 if unfinished, 0 if draw
​