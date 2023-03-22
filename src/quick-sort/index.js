// В среднем (O) = n * log * n, в худшем // (O) = n * n

function quickSort(array) {
  let pivot = array[0];
  const left = [];
  const right = [];
  const equal = [];

  if (array.length < 2) return array;

  for (let currentElement of array) {
    if (pivot > currentElement) left.push(currentElement);
    if (pivot < currentElement) right.push(currentElement);
    if (pivot === currentElement) equal.push(currentElement);
  }

  return quickSort(left).concat(equal, quickSort(right));
}

console.log(quickSort([])); // []
console.log(quickSort([3])); // [3]
console.log(quickSort([3, 4, 6, 2, 1])); // [1, 2, 3, 4, 6]
console.log(quickSort([3, 2, 5, 2, 6])); // [2, 2, 3, 5, 6]
console.log(quickSort([3, 2, 5, 2, 2])); // [2, 2, 2, 3, 5]
