function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1;
  let max = 0;
  for(let x of a1){
    for(let y of a2){
      max = Math.max(max, Math.abs(x.length - y.length));
    } 
  }
  return max;
}