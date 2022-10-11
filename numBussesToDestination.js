var numBusesToDestination = function (routes, source, target) {
  let stopRoutes = new Map();

  for (let route = 0; route < routes.length; route++) {
    for (let stop of routes[route]) {
      if (!stopRoutes.has(stop)) stopRoutes.set(stop, new Set());
      stopRoutes.get(stop).add(route);
    }
  }

  console.log(stopRoutes);

  const visited = {
    [source]: true,
  };
  const queue = [
    {
      ln: 0,
      node: source,
    },
  ];

  while (queue.length > 0) {
    const path = queue.shift();

    const node = path.node;
    if (node === target) {
      return path.ln;
    }

    for (let next of stopRoutes.get(node)) {
      if (visited[next] !== undefined) {
        continue;
      }

      visited[next] = true;
      queue.push({
        ln: path.ln + 1,
        node: next,
      });
    }
  }

  return -1;
};

console.log(
  numBusesToDestination(
    [
      [1, 2, 7],
      [3, 6, 7],
    ],
    1,
    7
  )
);
