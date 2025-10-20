var capitals = function (word) {
  return word.split('').reduce((acc, e, i) => {
    if(e.toUpperCase() === e) acc.push(i);
    return acc;
  }, [])
};