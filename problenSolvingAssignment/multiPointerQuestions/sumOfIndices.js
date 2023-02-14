const arrIdxSum = (arr, num) => {

  if (arr.length > 1) {
    arr.sort((a, b) => a - b);
    const length = arr.length;
    let j = length - 1;

    for (let i = 0; i < length; i++) {
      if (i == j) {
        return false
      }
      else if (arr[i] + arr[j] == num) {
        return true
      }
      else if (arr[i] + arr[j] > num) {
        j--;
        i--;
      }
    }
  } else {
    console.log("please put some thing in array 'don't give empty array' ");
  }
}

console.log(arrIdxSum([1, 2, 3, 4, 5, 5], 5))
