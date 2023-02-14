//  SLIDING WINDOW APPROACH

const maxSubArraySWA = (arr, k) => {
  if (arr.length < k) {
    return console.log("msg: sub array is Greater then array")
  }
  else if (k < 0) {
    return console.log("sub array length is smaller than 0")
  }


  else {
    const length = arr.length - k;
    let sum = 0;
    let maxSum;
    for (let i = 0; i < k; i++) {
      sum += arr[i];
    }
    maxSum = sum;
    for (let i = 1; i <= length; i++) {
      sum = sum - arr[i - 1] + arr[i + k - 1]
      if (maxSum < sum) {
        maxSum = sum
      }
    }
    return console.log("Max Sum -> ", maxSum);
  }
}



maxSubArraySWA([-1, -1, -2, -1, -2, -2, -2, -1, -2, -1, -2], 3);

