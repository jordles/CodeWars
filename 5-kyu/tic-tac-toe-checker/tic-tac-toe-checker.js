function isSolved(board) {
  // Helper: check if all elements in array are the same and not zero
  const isWinningLine = (a, b, c) => a === b && b === c && a !== 0;
​
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    // Check row
    if (isWinningLine(board[i][0], board[i][1], board[i][2])) {
      return board[i][0];
    }
    // Check column
    if (isWinningLine(board[0][i], board[1][i], board[2][i])) {
      return board[0][i];
    }
  }
​
  // Check diagonals
  if (isWinningLine(board[0][0], board[1][1], board[2][2])) {
    return board[0][0];
  }
  if (isWinningLine(board[0][2], board[1][1], board[2][0])) {
    return board[0][2];
  }
​
  // Check for empty spots (unfinished game)
  for (let row of board) {
    if (row.includes(0)) {
      return -1;
    }
  }
​
  // It's a draw
  return 0;
}