var letterCombinations = function (digits, memo={}, str="", flag=true) {
  console.log("*")
  // if (digits in memo) return memo[digits];
  if (!digits.length) return str;
  let result = new Set();

  let key = { 2: ["a", "b", "c"], 
              3: ["d", "e", "f"], 
              4: ["g", "h", "i"], 
              5: ["j", "k", "l"], 
              6: ["m", "n", "o"], 
              7: ["p", "q", "r", "s"], 
              8: ["t", "u", "v"], 
              9: ["w", "x", "y", "z"] };

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    let newDigits = digits.slice(0, i).concat(digits.slice(i+1));
    let arr = key[digit];
    memo[newDigits] = [];

    for (let j = 0; j < arr.length; j++) {
      let letter = arr[j];
      let tempStr = str.concat(letter);
      console.log(!!flag)
      let newCombos = letterCombinations(newDigits, memo, tempStr, false)
      memo[newDigits] = memo[newDigits].concat(newCombos)
    }
    console.log("inside")
    console.log(memo[newDigits])
    console.log(!!flag)
    result.add(memo[newDigits])
  }
  console.log("result")
  console.log(result)
  return Array.from(result)
};

console.log(letterCombinations("234"))