function subArray(arr, num) {

  let j = 0;
  counter = 0;
  const newArray = [];
  for (i = 1; i < arr.length - 1; i++) {
    if (arr[i] * arr[j] < num) {
      newArray[i] == arr[i] * arr[j];
      counter++;
    }
    if (i == arr.length - 1) {
      j++;
      
    }
    if (arr[j] < num) {
      newArray[i] == arr[i] * 1;
      counter++;
    }
  }
  return console.log(counter);
}
subArray([1, 2, 3, 4], 10);
