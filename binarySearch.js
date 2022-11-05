const binarySearch = (nums, target) => {
  let lo = 0,
    hi = nums.length - 1;

  while (hi >= lo) {
    const mid = Math.floor((hi + lo) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch([9], 9));
