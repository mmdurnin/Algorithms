// given two strings, return the unique characters shared by the two strings

function uniquePairs(str1, str2) {
  let chars1 = new Set(str1.split(""))
  let result = new Set();
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i]
    if (chars1.has(char)) result.add(char)
  }
  return Array.from(result);
}

console.log(uniquePairs("maureen", "neeruam"))