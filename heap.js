const heapify = (heap, root) => {
  let largest = root;
  let left = root * 2 + 1;
  let right = root * 2 + 2;

  if (left <= heap.length - 1 && heap[largest] < heap[left]) {
    largest = left;
  }

  if (right <= heap.length - 1 && heap[largest] < heap[right]) {
    largest = right;
  }

  if (root !== largest) {
    let swap = heap[root];
    heap[root] = heap[largest];
    heap[largest] = swap;
    heapify(heap, largest);
  }
};

const buildHeap = (array) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i);
  }

  return array;
};

const heapSort = (array) => {
  const sorted = [];
  buildHeap(array);

  while (array.length > 0) {
    sorted.unshift(array[0]);
    array[0] = array.slice(-1)[0];
    array.length = array.length - 1;
    heapify(array, 0);
  }

  return sorted;
};

// console.log(buildHeap([17, 15, 13, 9, 6, 5, 10, 4, 8, 3, 1]));
// console.log(buildHeap([1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]));
console.log(heapSort([1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]));
