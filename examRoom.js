var ExamRoom = function(n) {
  this.maxSeat = n - 1;
  this.seats = [];
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
  if (this.seats.length === 0) {
    this.seats.push(0);
    return 0;
  }

  let maxHalf = 0;
  let maxIntervalStart = 0;

  for (let i = 0; i < this.seats.length; i++) {
    if (i === 0 && this.seats[i] !== 0) {
      maxIntervalStart = this.seats[i] * -1;
      maxHalf = this.seats[i];

      if (this.seats.length === 1) {
        const half = this.maxSeat - this.seats[i];

        if (half > maxHalf) {
          maxHalf = half;
          maxIntervalStart = i;
        }
      }

      continue;
    }

    if (i < this.seats.length - 1) {
      const half = Math.floor((this.seats[i + 1] - this.seats[i]) / 2);
      if (half > maxHalf) {
        maxHalf = half;
        maxIntervalStart = i;
      }
      continue;
    }

    if (this.seats[i] === this.maxSeat) {
      continue;
    }

    const half = this.maxSeat - this.seats[i];

    if (half > maxHalf) {
      maxHalf = half;
      maxIntervalStart = i;
    }
  }

  if (maxIntervalStart < 0) {
    this.seats.unshift(0);
    return 0;
  }

  this.seats.splice(maxIntervalStart + 1, null, this.seats[maxIntervalStart] + maxHalf);
  return this.seats[maxIntervalStart] + maxHalf;
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
  let i = 0;
  for (i; i < this.seats.length; i++) {
    if (this.seats[i] === p) {
      break;
    }
  }

  this.seats.splice(i, 1);
};

const e = new ExamRoom(8);
console.log(e.seat());
console.log(e.seat());
console.log(e.seat());
e.leave(0);
e.leave(7);
console.log(e.seat());
console.log(e.seat());
console.log(e.seat());
console.log(e.seat());
console.log(e.seat());
console.log(e.seat());
console.log(e.seat());
