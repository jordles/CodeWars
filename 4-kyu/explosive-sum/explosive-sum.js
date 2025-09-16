function sum(n){
  let p=[1];
  for(let i=1;i<=n;i++){
    let s=0;
    for(let k=1;;k++){
      let g1=k*(3*k-1)/2,g2=k*(3*k+1)/2;
      if(g1>i&&g2>i) break;
      let sign=k%2?1:-1;
      if(g1<=i) s+=sign*p[i-g1];
      if(g2<=i) s+=sign*p[i-g2];
    }
    p[i]=s;
  }
  return p[n];
}