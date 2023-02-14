const longestSubSequence = (string) => {
  let count = 0;
  let l = 0;
  r = 0;
  let ans = 0;
  while (r < string.length) {
    count[string[r]]++;
    while (count[string[r]] > 1) {
      count[string[l]]--;
      l++
    }
    let max;
    ans = max[ans, r - 1 + 1]
    r++;
  }
  return ans;
}
longestSubSequence(["12341234"])