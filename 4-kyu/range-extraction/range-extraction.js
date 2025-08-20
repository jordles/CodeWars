function solution(list) {
  let result = [];
  let start = list[0];
  let prev = list[0];
​
  for (let i = 1; i <= list.length; i++) {
    if (list[i] === prev + 1) {
      // continue the sequence
      prev = list[i];
    } else {
      // sequence ended, decide how to format it
      if (prev - start >= 2) {
        result.push(start + "-" + prev);
      } else if (prev === start) {
        result.push(start.toString());
      } else {
        result.push(start.toString(), prev.toString());
      }
      // reset
      start = list[i];
      prev = list[i];
    }
  }
​
  return result.join(",");
}