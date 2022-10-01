var largestVariance = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }

  let globalMax = 0;

  for (let c1 of Object.keys(hash)) {
    for (let c2 of Object.keys(hash)) {
      if (c1 === c2) {
        continue;
      }

      let c1Count = 0;
      let c2Count = 0;
      let c1Remaining = hash[c1];

      for (let c of s.split("")) {
        if (c1 === c) {
          c1Count++;
          c1Remaining--;
        }

        if (c2 === c) {
          c2Count++;
        }

        if (c2Count < c1Count && c1Remaining > 0) {
          c1Count = 0;
          c2Count = 0;
        }

        if (c1Count > 0 && c2Count > 0) {
          globalMax = Math.max(globalMax, c2Count - c1Count);
        }
      }
    }
  }

  return globalMax;
};

console.log(largestVariance("abcdef"));
