snail = function(array) {
  const result = [];
  while (array.length) {
    // take top row
    result.push(...array.shift());
    // take right column
    array.forEach(row => result.push(row.pop()));
    // take bottom row (reversed)
    if (array.length) result.push(...array.pop().reverse());
    // take left column (bottom to top)
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].length) result.push(array[i].shift());
    }
  }
  return result;
}