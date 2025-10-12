function sumDigits(n) {
  return [...Math.abs(n).toString()].reduce((a, d) => a + +d, 0);
}