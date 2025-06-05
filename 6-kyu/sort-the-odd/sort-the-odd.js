function sortArray(array) {
  const odd = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);
  
  let index = 0;
  return array.map(n => (n % 2 !== 0) ? odd[index++] : n);
}