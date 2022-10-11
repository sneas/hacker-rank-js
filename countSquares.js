var countSquares = function (matrix) {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        continue;
      }

      result++;
      let k = 0;
      let valid = true;
      while (valid) {
        k++;

        if (i + k >= matrix.length) {
          break;
        }

        if (j + k >= matrix[i].length) {
          break;
        }

        for (let i1 = i; i1 <= i + k; i1++) {
          if (matrix[i1][j + k] === 0) {
            valid = false;
            break;
          }
        }

        if (!valid) {
          break;
        }

        for (let j1 = j; j1 <= j + k; j1++) {
          if (matrix[i + k][j1] === 0) {
            valid = false;
            break;
          }
        }

        if (!valid) {
          break;
        }

        result++;
      }
    }
  }

  return result;
};

console.log(
  countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ])
);
