const thirdHighest = (arr) => {
  let largest = arr[0];
  let secondLargest = Number.MIN_VALUE;
  let thirdLargest = Number.MIN_VALUE;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > thirdLargest && arr[i] < secondLargest) {
      thirdLargest = arr[i];
    }
  }
  return console.log(thirdLargest);
}
thirdHighest([1, 2, 3, 4, 5, -6, -7, -8])
