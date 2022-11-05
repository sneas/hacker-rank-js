const insertItem = (items, item) => {
  if (items[0] >= item) {
    items.unshift(item);
    return;
  }

  if (items[items.length - 1] <= item) {
    items.push(item);
    return;
  }

  for (let i = 0; i < items.length - 1; i++) {
    if (items[i] <= item && items[i + 1] >= item) {
      items.splice(i + 1, 0, item);
      return;
    }
  }
};

const deleteItem = (items, item) => {
  let index = 0;
  for (index; index < items.length; index++) {
    if (items[index] === item) {
      break;
    }
  }
  items.splice(index, 1);
};

const longestSubarray = function (nums, limit) {
  let maxItems = 1;
  let items = [nums[0]];

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    insertItem(items, nums[j]);

    if (items[items.length - 1] - items[0] <= limit) {
      maxItems = Math.max(maxItems, items.length);
    } else {
      while (items[items.length - 1] - items[0] > limit) {
        deleteItem(items, nums[i]);
        i++;
      }
    }
  }

  return maxItems;
};

console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
