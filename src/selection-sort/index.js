// (O) = n * n

function findSmallest(array) {
  let indexMin = 0;

  for (let i = 0; i < array.length; i += 1)
    if (array[i] < array[indexMin]) indexMin = i;

  return indexMin;
}

function findGreatest(array) {
  let indexMin = 0;

  for (let i = 0; i < array.length; i += 1)
    if (array[i] > array[indexMin]) indexMin = i;

  return indexMin;
}

function selectionSort(array, sortingFunction) {
  const sortedArray = [...array];

  for (let i = 0; i < sortedArray.length; i += 1) {
    let indexMin = sortingFunction(sortedArray.slice(i)) + i;

    if (indexMin !== i)
      [sortedArray[i], sortedArray[indexMin]] = [
        sortedArray[indexMin],
        sortedArray[i],
      ];
  }

  return sortedArray;
}

const unsortedArray = [63, 38, 99, 42, 80, 51, 76, 24, 76, 15];

console.log(selectionSort(unsortedArray, findSmallest));
console.log(selectionSort(unsortedArray, findGreatest));
