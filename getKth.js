/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  const h = {
    1: 0,
  };

  const getPow = (n) => {
    if (h[n] !== undefined) {
      return h[n];
    }

    h[n] = getPow(n % 2 === 0 ? n / 2 : n * 3 + 1) + 1;
    return h[n];
  };

  const ar = Array.from(
    {
      length: hi - lo + 1,
    },
    (v, k) => k + lo
  ).sort((a, b) => {
    const powMinus = getPow(a) - getPow(b);

    if (powMinus === 0) {
      return a - b;
    }

    return powMinus;
  });

  return ar[k - 1];
};

console.log(getKth(7, 11, 4));
