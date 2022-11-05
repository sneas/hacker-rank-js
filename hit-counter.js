var HitCounter = function () {
  this.hits = [];
};

HitCounter.prototype.findBound = function (timestamp, isBegin = true) {
  let lo = 0,
    hi = this.hits.length - 1;

  while (hi >= lo) {
    const mid = Math.floor((lo + hi) / 2);

    if (isBegin) {
      if (this.hits[mid] > timestamp) {
        if (mid === lo || this.hits[mid - 1] <= timestamp) {
          return mid;
        }

        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else {
      if (this.hits[mid] <= timestamp) {
        if (mid === hi || this.hits[mid + 1] > timestamp) {
          return mid;
        }

        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }

  return -1;
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  this.hits.push(timestamp);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  const b = this.findBound(timestamp - 300, true);
  if (b === -1) {
    return 0;
  }

  const e = this.findBound(timestamp, false);

  return e - b + 1;
};

const hitCounter = new HitCounter();
hitCounter.hit(1); // hit at timestamp 1.
hitCounter.hit(2); // hit at timestamp 2.
hitCounter.hit(3);
console.log(hitCounter.getHits(4));
hitCounter.hit(300);
console.log(hitCounter.getHits(300));
console.log(hitCounter.getHits(301));
