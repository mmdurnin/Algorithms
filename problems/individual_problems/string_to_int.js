/*
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non - whitespace character is found.Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non - whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.
*/

function atoi(str) {
  if (str.includes('+-') || str.includes('-+') || str === "")
    return 0;

  for (i in str) {
    let char = str[i];

    if (char !== " ")
      if (char === "-" || char === "+" || Number(char) || char === '0') return numberize(str.slice(i));
      if (String(Number(char)) === 'NaN') return 0;
  }
  return 0
}

function numberize(str) {
  let i = 0, s = "";
  
  if (str[i] === "+" || str[i] === "-")
    s = s.concat(str[i])
    i++
  
  console.log(str)
  while ((Number(str[i]) || str[i] === '0') && i < str.length) {
    let char = str[i];
    s = s.concat(char)
    i++
  } 

  let result = Number(s);
  console.log(result)
  if (!result) return 0;

  if (Math.abs(result) > 2**31 - 1) {
    result = result < 0 ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  };
  return result;
}

// console.log(atoi("   -42"))
// console.log(atoi("-91283472332"))
// console.log(atoi("42"))
// console.log(atoi("words and 987"))
// console.log(atoi(""))
// console.log(atoi("    0000000000000   "))
console.log(atoi("  0000000000012345678"))