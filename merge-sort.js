const merge = (ar1, ar2) => {
  let i = 0,
    j = 0;
  let res = [];

  while (i < ar1.length || j < ar2.length) {
    if (ar1.length <= i) {
      res.push(ar2[j]);
      j++;
    } else if (ar2.length <= j) {
      res.push(ar1[i]);
      i++;
    } else if (ar1[i] > ar2[j]) {
      res.push(ar2[j]);
      j++;
    } else {
      res.push(ar1[i]);
      i++;
    }
  }

  return res;
};

// console.log(merge([1, 2, 3], [3, 4]));

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  return merge(
    mergeSort(array.slice(0, middle)),
    mergeSort(array.slice(middle))
  );
};

console.log(mergeSort([2, 3, 1]));
console.log(mergeSort([2, 3, 1, 6, 4, 5]));
