function getAllNeighbours(grid, x, y) {
  const neighbours = [];

  let c = x - 1;
  while (c >= 0 && grid[c].charAt(y) !== "X") {
    neighbours.push([c, y]);
    c--;
  }

  c = x + 1;
  while (c < grid.length && grid[c].charAt(y) !== "X") {
    neighbours.push([c, y]);
    c++;
  }

  c = y - 1;
  while (c >= 0 && grid[x].charAt(c) !== "X") {
    neighbours.push([x, c]);
    c--;
  }

  c = y + 1;
  while (c < grid.length && grid[x].charAt(c) !== "X") {
    neighbours.push([x, c]);
    c++;
  }

  return neighbours;
}

// Complete the minimumMoves function below.
function minimumMoves(grid, startX, startY, goalX, goalY) {
  const queue = [[startX, startY]];
  const distance = {
    [`${startX};${startY}`]: 0
  };
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const dst = distance[`${x};${y}`];
    if (x === goalX && y === goalY) {
      return dst;
    }

    getAllNeighbours(grid, x, y).forEach(([x, y]) => {
      if (distance[`${x};${y}`] !== undefined) {
        return;
      }
      distance[`${x};${y}`] = dst + 1;
      queue.push([x, y]);
    });
  }

  return Infinity;
}

console.log(minimumMoves([".X.", ".X.", "..."], 0, 0, 0, 2));
