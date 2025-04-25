String.prototype.toAlternatingCase = function () {
  return this.split('').map(char =>
    char === char.toLowerCase()
      ? char.toUpperCase()
      : char.toLowerCase()
  ).join('');
}