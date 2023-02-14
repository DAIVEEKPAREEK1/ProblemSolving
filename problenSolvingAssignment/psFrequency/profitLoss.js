const calculateProfitLoss = (arr, buy, sell) => {
  if (arr.length > buy && arr.length > sell) {
    if (arr[buy] > arr[sell]) {
      console.log("loss ", arr[buy] - arr[sell])
    }
    else if (arr[buy] < arr[sell]) {
      console.log("profit ", arr[sell] - arr[buy])
    } else {
      console.log("no profit");
    }
  }
}


calculateProfitLoss([1, 2, 3, 4, 5, 6, 7], 6, 1);
