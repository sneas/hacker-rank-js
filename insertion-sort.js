const insertionSort = (a) => {
  for (let i = 1; i < a.length; i++) {
    for (let j = i; i > 0; j--) {
      if (a[j] < a[j - 1]) {
        const b = a[j - 1];
        a[j - 1] = a[j];
        a[j] = b;
      } else {
        break;
      }
    }
  }

  return a;
};

console.log(insertionSort([2, 3, 1]));
console.log(insertionSort([2, 3, 1, 6, 4, 5]));
