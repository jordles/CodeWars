function findNb(m) {
  let n = 0;
  let total = 0;
  while(total < m){
    n += 1;
    total += n**3;
  }
  
  return total == m ? n : -1;
}
​