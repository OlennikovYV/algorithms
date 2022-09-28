// (O) = log n

function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.ceil((high + low) / 2);
    let guess = list[mid];

    if (guess === item) return guess;

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const listItem = [0, 1, 1, 3, 3, 4, 7, 7];

console.log(binarySearch(listItem, 0));
console.log(binarySearch(listItem, 1));
console.log(binarySearch(listItem, 2));
console.log(binarySearch(listItem, 3));
console.log(binarySearch(listItem, 4));
console.log(binarySearch(listItem, 5));
console.log(binarySearch(listItem, 6));
console.log(binarySearch(listItem, 7));
console.log(binarySearch(listItem, 8));
