function solution(text, markers) {
  return text.split('\n').map(line => {
    const cutIndex = markers
      .map(marker => line.indexOf(marker))
      .filter(i => i !== -1);
    
    const minIndex = Math.min(...cutIndex, line.length);
    return line.slice(0, minIndex).trimEnd();
  }).join('\n');
}