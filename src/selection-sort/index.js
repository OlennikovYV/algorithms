// (O) = n * n

function selectionSort(array) {
  const sortedArray = [...array];

  for (let i = 0; i < sortedArray.length; i += 1) {
    let indexMin = i;

    for (let j = i; j < sortedArray.length; j += 1)
      if (sortedArray[indexMin] > sortedArray[j]) indexMin = j;

    if (indexMin !== i)
      [sortedArray[i], sortedArray[indexMin]] = [
        sortedArray[indexMin],
        sortedArray[i],
      ];
  }

  return sortedArray;
}

const unsortedArray = [63, 38, 99, 42, 80, 51, 76, 24, 76, 15];

console.log(selectionSort(unsortedArray));
