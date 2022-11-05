const fits = (time, t, totalTrips) => {
  let total = 0;
  for (let i = 0; i < time.length; i++) {
    if (time[i] > t) {
      break;
    }

    total += Math.floor(t / time[i]);

    if (total >= totalTrips) {
      return true;
    }
  }

  return false;
};

var minimumTime = function (time, totalTrips) {
  time.sort((a, b) => a - b);
  let maxT = time[0] * totalTrips;
  let minT = 1;

  while (minT < maxT) {
    let middle = Math.floor((maxT + minT) / 2);
    if (!fits(time, middle, totalTrips)) {
      minT = middle + 1;
    } else {
      maxT = middle;
    }
  }

  return minT;
};

console.log(minimumTime([1, 2, 3], 5));
