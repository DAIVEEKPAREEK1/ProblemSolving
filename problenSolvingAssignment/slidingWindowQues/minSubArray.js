//  SLIDING WINDOW APPROACH

const minSubArraySWA = (arr, k) => {
  if (arr.length < k) {
    return console.log("msg: sub array is Greater then array")
  }
  else if (k < 0) {
    return console.log("sub array length is smaller than 0")
  }


  else {
    const length = arr.length - k;
    let sum = 0;
    let minSum;
    for (let i = 0; i < k; i++) {
      sum += arr[i];
    }
    minSum = sum;
    for (let i = 1; i <= length; i++) {
      sum = sum - arr[i - 1] + arr[i + k - 1]
      if (minSum > sum) {
        minSum = sum
      }
    }
    return console.log("Min Sum => ", minSum);
  }
}



minSubArraySWA([0, -1], -1)

