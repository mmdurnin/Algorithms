/*
Find the longest palindromic substring
*/

function longestPalindromicSubstring(string) {
  let longest = string[0];

  for (let i = 0; i < string.length; i++) {
    let midThree = checkRange(i - 1, i + 1, string);
    let midTwo = checkRange(i - 1, i, string);
    let maxString = midThree.length > midTwo.length ? midThree : midTwo;

    if (maxString.length > longest.length) longest = maxString;
  }

  return longest;
}

function checkRange(leftIdx, rightIdx, string) {
  let longest = "";

  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;

    let temp = string.slice(leftIdx, rightIdx + 1);
    if (temp.length > longest.length) longest = temp;

    leftIdx -= 1;
    rightIdx += 1;
  }
  return longest;
}

console.log(longestPalindromicSubstring("racecar"))
console.log(longestPalindromicSubstring("maureen"))
console.log(longestPalindromicSubstring("twoowte"))