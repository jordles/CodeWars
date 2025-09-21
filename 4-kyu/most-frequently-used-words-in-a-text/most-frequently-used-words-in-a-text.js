function topThreeWords(text) {
  const words = (text.toLowerCase().match(/[a-z]+'?[a-z']*/g) || [])
    .filter(w => /[a-z]/.test(w));
  
  const counts = words.reduce((m, w) => {
    m[w] = (m[w] || 0) + 1;
    return m;
  }, {});
  
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([w]) => w);
}