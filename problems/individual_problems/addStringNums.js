function addStringNums(str1, str2) {
  // split strs to deal with whole section and decimal section separately
  let arr1 = str1.split("."), arr2 = str2.split(".")

  // create vars for whole str & dec str, reverse whole so that we add 0s to the right side of the shorter whole #
  let whole1 = reverse(arr1[0]), whole2 = reverse(arr2[0])
  let dec1 = (arr1.length === 2) ? arr1[1] : "0";
  let dec2 = (arr2.length === 2) ? arr2[1] : "0";

  // fill shorter of whole # str and decimal # str with 0s to make equal lengths
  if (whole1.length < whole2.length) 
    whole1 = fillNum(whole1, whole2)
  else 
    whole2 = fillNum(whole2, whole1)

  if (dec1.length < dec2.length) 
    dec1 = fillNum(dec1, dec2)
  else 
    dec2 = fillNum(dec2, dec1)

  // returns after adding wholes/ decimals together
  let [resultDec, decCarry] = addNums(reverse(dec1), reverse(dec2))
  let [resultWhole, wholeCarry] = addNums(whole1, whole2);

  // if the whole number had a carry at the end:
  if (wholeCarry === 1) resultWhole = "1".concat(resultWhole)

  // if the decimal addition resulted in a carry to whole:
  if (decCarry === 1) {
    let tempArr = addNums(fillNum("1", resultWhole), reverse(resultWhole));
    resultWhole = tempArr[0]
    wholeCarry = tempArr[1]
  }

  return resultWhole.concat(".", resultDec)
}

// helpers

function reverse(str) {
  return str.split("").reverse().join("")
}

function fillNum(shorter, larger) {
  const dif = larger.length - shorter.length;
  for (let i = 0; i < dif; i++) {
    shorter = shorter.concat(0);
  }
  return shorter;
}

function addNums(str1, str2) {
  let carry = 0;
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    let n1 = Number(str1[i]), n2 = Number(str2[i]) 
    let temp = n1 + n2 + carry;
    carry = (temp > 9) ? 1 : 0

    result = result.concat(temp % 10)
  }
  return [reverse(result), carry]
}


console.log(addStringNums("123.80008906", "1234356.234"))
console.log(addStringNums("9.9", "9.9"))