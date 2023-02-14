const maxSubArray = (arr, k) => {

  let maxSum;
  arrLength = arr.length;
  for (let i = 0; i < arrLength - k; i++) {
    let sum = 0
    for (let j = i; j < k + i; j++) {
      sum = sum + arr[j];
    }
    if (i == 0 || maxSum < sum) {
      maxSum = sum;
    }
  }
  return console.log(maxSum);
}
maxSubArray([-1, -1, -2, -1, -2, -2, -2, -1, -2, -1, -2], 3);

