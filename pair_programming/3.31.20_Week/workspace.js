/*
Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array.
Here a k-diff pair is defined as an integer pair (i, j),
where i and j are both numbers in the array and their absolute difference is k.

input: [3, 1, 4, 1, 5], 2
output: 2
explanation: [[3, 1], [5, 2]]

input: [1, 1, 1, 1, 1], 0
output: 1
explanation: [[1, 1]]

***************

input: [1, 2, 3, 4], 0
output: 0
explanation: no numbers whose absolute difference is 0

input: [1, 2, 3], -1
output: 0
explanation: no numbers whose absolute difference is -1

input: [1, 2, 3, 4, 5, 6, 7], 2
output: 5
explanation: [[1, 3], [2, 4], [3, 5], [4, 6], [5, 7]]

*/