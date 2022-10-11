var getMaximumGenerated = function (n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let max = 0;
  let res = [0, 1];

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      res.push(res[Math.floor(i / 2)]);
    } else {
      res.push((res[Math.floor(i / 2)] = res[Math.floor(i / 2) + 1]));
    }

    max = Math.max(max, res.at(-1));
  }

  return max;
};

getMaximumGenerated(7);
