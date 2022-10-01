const leastInterval = (tasks, n) => {
  const all = tasks.reduce((acc, task) => {
    if (acc[task] !== undefined) {
      return {
        ...acc,
        [task]: ++acc[task],
      };
    } else {
      return {
        ...acc,
        [task]: 1,
      };
    }
  }, {});

  const queue = Object.keys(all).sort((a, b) => all[b] - all[a]);
  let res = 0;
  const first = queue[0];
  let f = 1;

  while (queue.length > 0) {
    f--;
    res++;

    if (f > 0 && queue[0] === first) {
      continue;
    }

    const task = queue.shift();

    if (task === first) {
      f = n + 1;
    }

    if (all[task] > 1) {
      queue.push(task);
      all[task]--;
    }
  }

  return res;
};

console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
);
