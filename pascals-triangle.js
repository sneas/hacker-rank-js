var generate = function (numRows) {
  const triangle = [[1]];

  if (numRows === 1) {
    return triangle;
  }

  for (let i = 2; i <= numRows; i++) {
    const previous = triangle.at(-1);
    const next = [1];

    for (let i = 0; i < previous.length - 1; i++) {
      next.push(previous[i] + previous[i + 1]);
    }

    next.push(1);
    triangle.push(next);
  }

  return triangle;
};

console.log(generate(5));
