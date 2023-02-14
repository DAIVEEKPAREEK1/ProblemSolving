// in an array remove nth element. 
const removeNthElement = (arr, idx) => {
  arr.sort();
  const arrayLength = arr.length;
  const newArr = [];
  let j = 0;
  if (arrayLength > idx || arrayLength > 0) {
    for (let i = 0; i < arrayLength; i++) {
      if (i != idx) {
        newArr[j] = arr[i];
        j++;
      }
    }
    newArr.sort((a, b) => a - b);
    arr = newArr;

    return console.log(arr);
  } else {
    console.log("appropriate length should be given")
  }

}

removeNthElement([], 7);

