function generateHashtag(str) {
  if (!str || str.trim().length === 0) return false;
​
  const words = str.trim().split(/\s+/); // splits on one or more spaces
  const capitalized = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  const result = '#' + capitalized.join('');
​
  return result.length > 140 ? false : result;
}