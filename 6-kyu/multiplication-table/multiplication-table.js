function multiplicationTable(size) {
  const table = new Array(size);
​
  for (let i = 0; i < size; i++) {
    const row = new Array(size);
    for (let j = 0; j < size; j++) {
      row[j] = (i + 1) * (j + 1);
    }
    table[i] = row;
  }
​
  return table;
}