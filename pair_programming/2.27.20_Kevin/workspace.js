/*
https://leetcode.com/problems/insert-interval/

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

* scan the input array for index 0 of newInterval
  - if num @ index 0 of new interval lies between an interval, disregard &  hold onto merge interval ("start")
  - if num @ index 0 of new interval lies outside of input array intervals, start new interval ("start")
    "start-sub" = starting subarray
    "start-num" = starting subarray @ index 0
* scan the input array of index 1 of newInterval
  - search forward: find sub where num @ index 1 is greater than currentnum
  - when we find the sub that meets this condition, ask if num @ index 0 > currentNum
    - if so, slice sub to end, slice 0 to start, concat ["startNum", "targetNum"] in the middle
    - if NOT, slice sub + 1 to end, slice 0 to start, concat[startNum, currentSub @index 1] in the middle
*/

// return intervals.slice(0, targetStartSub).concat([targetStart, targetEnd], intervals.slice(targetEndSub + 1))

var insert = function (intervals, newInterval) {
  const nStart = newInterval[0]
  const nEnd = newInterval[1]
  let targetStartSub; // (index on intervals where merged portion begins)
  let targetStart; // the starting number of the "merged" interval
  let targetEndSub; // (index on intervals where merged portion ends)
  let targetEnd; // the ending number of the "merged" interval

  for (let i = 0; i < intervals.length; i++) {
    // find where nStart fits   
    let temp = intervals[i]
    if (!targetStart && temp[1] > nStart) {
      targetStart = temp[0] > nStart ? nStart : temp[0]
      targetStartSub = i;
    }
    if (!!targetStart && temp[0] <= nEnd) {
      console.log("is this even happening?")
      if (temp[1] > nEnd) {
        console.log("THIS SHOULD BE HAPPENING")
        targetEnd = temp[1];
        targetEndSub = i;
      } else if (intervals[i + 1][0] > nEnd) {
        console.log("THIS SHOULD BE HAPPENING")
        targetEnd = tempEnd;
        targetEndSub = i;
      }
    }
  }
  console.log(targetStart)
  console.log(targetStartSub)
  return intervals.slice(0, targetStartSub).concat([[targetStart, targetEnd]], intervals.slice(targetEndSub + 1))
};

console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); // => [[1,2],[3,10],[12,16]]