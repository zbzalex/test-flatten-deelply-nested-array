function flat(arr, n) {
  return arr.reduce((acc, cur) => {
    
    if (cur instanceof Array && n > 0) {
      acc = [...acc, ...flat(cur, n-1)];
    } else {
      acc.push(cur)
    }
      
    return acc;
  }, []);
}

