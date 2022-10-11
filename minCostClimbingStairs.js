const memo = {};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost, i = cost.length) {
  if (i <= 1) {
    return 0;
  }

  if (memo[i] === undefined) {
    memo[i] = Math.min(
      cost[i - 1] + minCostClimbingStairs(cost, i - 1),
      cost[i - 2] + minCostClimbingStairs(cost, i - 2)
    );
  }

  return memo[i];
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
