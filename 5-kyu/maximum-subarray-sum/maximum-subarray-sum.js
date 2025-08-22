var maxSequence = function(arr){
  let maxSoFar = 0;
  let currentMax = 0;
​
  for (const num of arr) {
    currentMax = Math.max(num, currentMax + num);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
​
  return maxSoFar;
}