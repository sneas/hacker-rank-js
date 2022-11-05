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

const insert = (heap, item) => {};
