var intToRoman = function (num, i=6, result="") {
  if (num === 0) return result;

  let index = { 1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M" }
  let keys = Object.keys(index), key = Number(keys[i]);
  let nextKey = Number(keys[i+1]), lastKey = Number(keys[i-1]);

  if (num < key) {
    i--;
    return intToRoman(num, i, result);
  } else {

    if (String(num)[0] === '4' && i < 6) {
      result = result.concat(index[key], index[nextKey])
      num -= (4 * key)

      return intToRoman(num, i, result)
    } else if (String(num)[0] === '9' && i < 6) {
      result = result.concat(index[lastKey], index[nextKey])
      num -= ((4 * lastKey) + key)

      return intToRoman(num, i, result)
    } else {
      num -= key;
      result = result.concat(index[key])

      return intToRoman(num, i, result)
    }
  }
};

console.log(intToRoman(19))
console.log(intToRoman(4))
console.log(intToRoman(304))
console.log(intToRoman(0))
console.log(intToRoman(444))