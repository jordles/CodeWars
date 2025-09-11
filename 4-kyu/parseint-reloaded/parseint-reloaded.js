function parseInt(s) {
  const small = {
    zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9,
    ten:10, eleven:11, twelve:12, thirteen:13, fourteen:14, fifteen:15, sixteen:16,
    seventeen:17, eighteen:18, nineteen:19
  };
  const tens = {
    twenty:20, thirty:30, forty:40, fifty:50, sixty:60, seventy:70, eighty:80, ninety:90
  };
  const scales = { hundred:100, thousand:1000, million:1000000 };
​
  let words = s.toLowerCase().replace(/ and /g,' ').split(/[\s-]+/);
  let total = 0, chunk = 0;
​
  for (let w of words) {
    if (small[w] != null) chunk += small[w];
    else if (tens[w] != null) chunk += tens[w];
    else if (w === 'hundred') chunk *= 100;
    else if (w === 'thousand' || w === 'million') {
      chunk *= scales[w];
      total += chunk;
      chunk = 0;
    }
  }
  return total + chunk;
}
​
​