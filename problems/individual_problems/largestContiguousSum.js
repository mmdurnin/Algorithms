/*
1. check if array is ALL negative - if so, return largest int
2. (the rest assumes there are positives) - group contiguous pos & negs
  if arr[-1] < 0, slice it off (but thats unnecessary)
3. create maxSum & create temp
4. iterate:
  5. if arr[i] < 0 && math.abs(arr[i]) > temp, start temp = 0 and continue
   --- find way to hold onto previous temp if if arr[i] < 0 && math.abs(arr[i]) < temp
  6. else temp += arr[i]
  7. if (temp > maxSum) maxSum = temp
8. return maxSum
*/