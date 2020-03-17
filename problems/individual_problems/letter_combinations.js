var letterCombinations = function (digits, str="") {
  if (!digits.length) return str;
  let result = [];

  let key = { 2: ["a", "b", "c"], 
              3: ["d", "e", "f"], 
              4: ["g", "h", "i"], 
              5: ["j", "k", "l"], 
              6: ["m", "n", "o"], 
              7: ["p", "q", "r", "s"], 
              8: ["t", "u", "v"], 
              9: ["w", "x", "y", "z"] };

  let digit = digits[0];
  let newDigits = digits.slice(1);
  let arr = key[digit];
  let store = [];

  for (let j = 0; j < arr.length; j++) {
    let letter = arr[j];
    let tempStr = str.concat(letter);
    let newCombos = letterCombinations(newDigits, tempStr)
    store = store.concat(newCombos)
  }
  result = result.concat(store)
  return result
};

console.log(letterCombinations("2356"))
console.log(letterCombinations(""))