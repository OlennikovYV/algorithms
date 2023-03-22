// В среднем (O) = n * log * n, в худшем // (O) = n * n

function quickSort(array) {
  let pivot = array[0];
  const left = [];
  const right = [];

  if (array.length < 2) return array;

  for (let i = 1; i < array.length; i += 1) {
    const currentElement = array[i];

    if (pivot > array[i]) {
      left.push(currentElement);
    } else {
      right.push(currentElement);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([])); // []
console.log(quickSort([3])); // [3]
console.log(quickSort([3, 4, 6, 2, 1])); // [1, 2, 3, 4, 6]
console.log(quickSort([3, 2, 5, 2, 6])); // [2, 2, 3, 5, 6]
