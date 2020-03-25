function addStrings(str1, str2) {
  // split up strs to handle differently
  let [whole1, dec1] = str1.split("."); if (!dec1) dec1 = "0";
  let [whole2, dec2] = str2.split("."); if (!dec2) dec2 = "0";

  // later we want to know if we should return a decimal number or not
  let hasDec = (dec1 !== "0" || dec2 !== "0");

  // we don't want to change the trailing decimal numbers of the longer dec, we'll cut them out for now and use them later
  let tail = "", decLength;
  if (hasDec) {
    let [maxDec, minDec] = (dec1.length > dec2.length) ? [dec1, dec2] : [dec2, dec1];
    decLength = maxDec.length, tail = maxDec.slice(minDec.length);
    dec1 = maxDec.slice(0, minDec.length), dec2 = minDec; // dec1 and dec2 are now the same length
  }

  // we have saved info to convert back to decimal later. Now we can add the merged numbers together
  let s1 = [whole1, dec1].join(""), s2 = [whole2, dec2].join("");
  let result = add(s1, s2);

  if (!hasDec) return result.slice(0, result.length - 1);
  result = result.concat(tail);
  return result.slice(0, (result.length - decLength)) + "." + result.slice(result.length - decLength);
}

function add(str1, str2) {
  let result = [], carry = 0, i = str1.length - 1, j = str2.length - 1;

  while (i >= 0 || j >= 0) {
    let sum = carry;
    sum += (i >= 0) ? str1.charCodeAt(i) - 48 : 0;
    sum += (j >= 0) ? str2.charCodeAt(j) - 48 : 0;

    carry = (sum >= 10) ? 1 : 0;

    result.push(String(sum % 10));
    i--;
    j--;
  }

  if (!!carry) result.push(carry)
  return result.reverse().join("");
}

console.log(addStrings("123.80008906", "1234356.234")) // 1234480.03408906
console.log(addStrings("9.9", "9.9")) // 19.8
console.log(addStrings("1", "2")) // 3

// function addStrings(str1, str2) {
//   // split up strs to handle differently
//   let [whole1, dec1] = str1.split("."); if (!dec1) dec1 = "0";
//   let [whole2, dec2] = str2.split("."); if (!dec2) dec2 = "0";

//   // later we want to know if we should return a decimal number or not
//   let hasDec = (dec1 === "0" && dec2 === "0") ? false : true;

//   // we don't want to change the trailing decimal numbers of the longer dec, we'll cut them out for now and use them later
//   let tail = "", decLength;
//   if (hasDec) {
//     let [maxDec, minDec] = (dec1.length > dec2.length) ? [dec1, dec2] : [dec2, dec1];
//     decLength = maxDec.length, tail = maxDec.slice(minDec.length);
//     dec1 = maxDec.slice(0, minDec.length), dec2 = minDec; // dec1 and dec2 are now the same length
//   }

//   // tack 0s onto the left of the shorter whole number
//   let wholes = addZeros(whole1, whole2);
//   whole1 = wholes[0], whole2 = wholes[1];

//   // we have saved info to convert back to decimal later. Now we can add the merged numbers together
//   let s1 = [whole1, dec1].join(""), s2 = [whole2, dec2].join("");
//   let result = add(s1, s2);

//   if (!hasDec) return result.slice(0, result.length - 1);
//   result = result.concat(tail);
//   return result.slice(0, (result.length - decLength)) + "." + result.slice(result.length - decLength);
// }

// function addZeros(s1, s2) {
//   let [short, long] = s1.length < s2.length ? [s1, s2] : [s2, s1];
//   const diff = long.length - short.length;

//   for (let i = diff; i > 0; i--) {
//     short = "0".concat(short)
//   }

//   return [short, long]
// }

// function add(str1, str2) {
//   let result = "", carry = 0;

//   for (let i = str1.length - 1; i >= 0; i--) {
//     let temp = Number(str1[i]) + Number(str2[i]) + carry;
//     carry = (temp >= 10) ? 1 : 0;

//     result = String(temp % 10).concat(result)
//   }

//   if (!!carry) result = String(carry).concat(result);
//   return result;
// }

// function addStrings(str1, str2) {
//   let [whole1, dec1] = str1.split("."); if (!dec1) dec1 = "0";
//   let [whole2, dec2] = str2.split("."); if (!dec2) dec2 = "0";

//   let hasDec = (dec1 !== "0" || dec2 !== "0");

//   let wholes = addZeros(reverse(whole1), reverse(whole2), "whole"), decs = addZeros(dec1, dec2);
//   whole1 = wholes[0], whole2 = wholes[1], dec1 = decs[0], dec2 = decs[1];

//   let tailLength = dec1.length;

//   let s1 = [whole1, dec1].join(""), s2 = [whole2, dec2].join("");
//   let result = add(s1, s2);

//   if (!hasDec) return result.slice(0, result.length - 1)
//   return result.slice(0, (result.length - tailLength)) + "." + result.slice(result.length - tailLength)
// }

// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// function addZeros(s1, s2, type = "dec") {
//   let [short, long] = s1.length < s2.length ? [s1, s2] : [s2, s1];
//   const diff = long.length - short.length;

//   for (let i = 0; i < diff; i++) {
//     short = short.concat("0")
//   }

//   return type === "whole" ? [reverse(short), reverse(long)] : [short, long]
// }

// function add(str1, str2) {
//   let result = [], carry = 0;

//   for (let i = str1.length - 1; i >= 0; i--) {
//     let temp = (str1.charCodeAt(i) - 48) + (str2.charCodeAt(i) - 48) + carry;
//     carry = (temp >= 10) ? 1 : 0;

//     result.push(String(temp % 10))
//   }

//   if (!!carry) result.push(carry)
//   return result.reverse().join("");
// }

// function addStrings(str1, str2) {
//   // tack 0s on right of short decimal and left of short whole
//   let [whole1, dec1] = str1.split("."); if (!dec1) dec1 = "0";
//   let [whole2, dec2] = str2.split("."); if (!dec2) dec2 = "0";

//   let hasDec = (dec1 === "0" && dec2 === "0") ? false : true;

//   let wholes = addZeros(reverse(whole1), reverse(whole2), "whole"), decs = addZeros(dec1, dec2);
//   whole1 = wholes[0], whole2 = wholes[1], dec1 = decs[0], dec2 = decs[1];

//   // save decimal from right hand side
//   let tailLength = dec1.length;

//   // merge str1 and str2
//   let s1 = [whole1, dec1].join(""), s2 = [whole2, dec2].join("");

//   // add
//   let result = add(s1, s2);

//   // replace decimal (if neither input had a decimal, do not return with a decimal)
//   if (!hasDec) return result.slice(0, result.length - 1)
//   return result.slice(0, (result.length - tailLength)) + "." + result.slice(result.length - tailLength)
// }

// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// function addZeros(s1, s2, type = "dec") {
//   // determine the shorter and longer of the two strings
//   let [short, long] = s1.length < s2.length ? [s1, s2] : [s2, s1];
//   // determine the difference in sizes so we know how many 0s to tack on
//   const diff = long.length - short.length;

//   for (let i = 0; i < diff; i++) {
//     short = short.concat("0")
//   }

//   // if we received whole type numbers, we need to reverse them before sending them back
//   return type === "whole" ? [reverse(short), reverse(long)] : [short, long]
// }

// function add(str1, str2) {
//   let result = "", carry = 0;

//   for (let i = str1.length - 1; i >= 0; i--) {
//     // add two nums together, plus carry (used if we need to carry a one)
//     let temp = Number(str1[i]) + Number(str2[i]) + carry;
//     // determine if our addition results in a carry, set carry accordingly
//     carry = (temp >= 10) ? 1 : 0;

//     // tack our temp onto the front of our result (we're working right to left), %10 in case temp is 2 digits (carry should be 1)
//     result = String(temp % 10).concat(result)
//   }

//   // if our numbers are whole, we can tack the carry onto the front of the result, otherwise we'll send our carry back to be added to whole
//   if (!!carry) result = String(carry).concat(result);
//   return result;
// }


// function addStrings(str1, str2) {

//   // separate each number (whole1, whole2, dec1, dec2)
//   let [whole1, dec1] = str1.split("."); if (!dec1) dec1 = "0"; 
//   let [whole2, dec2] = str2.split("."); if (!dec2) dec2 = "0";

//   let hasDecimal = (dec1 !== "0" || dec2 !== "0")

//   // make whole numbers the same length by tacking 0s to the left of the smaller #, decs to the right
//   let wholes = addZeros(reverse(whole1), reverse(whole2), "whole"), decs = addZeros(dec1, dec2);
//   whole1 = wholes[0], whole2 = wholes[1], dec1 = decs[0], dec2 = decs[1];

//   // add whole numbers together
//   let wholeResult = add(whole1, whole2, "whole")
//   let decResult = ""; if (hasDecimal) decResult = add(dec1, dec2, "dec");

//   let result = hasDecimal ? wholeResult.concat(".", decResult[0]) : wholeResult;
//   if (hasDecimal) return result;
//   return decResult[1] ? addStrings(result, "1") : result;
// }

// function addZeros(s1, s2, type = "dec") {
//   // determine the shorter and longer of the two strings
//   let [short, long] = s1.length < s2.length ? [s1, s2] : [s2, s1];
//   // determine the difference in sizes so we know how many 0s to tack on
//   const diff = long.length - short.length;

//   for (let i = 0; i < diff; i++) {
//     short = short.concat("0")
//   }

//   // if we received whole type numbers, we need to reverse them before sending them back
//   return type === "whole" ? [reverse(short), reverse(long)] : [short, long]
// }

// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// function add(str1, str2, type) {
//   let result = "";
//   let carry = 0;

//   for (let i = str1.length - 1; i >= 0; i--) {
//     // add two nums together, plus carry (used if we need to carry a one)
//     let temp = Number(str1[i]) + Number(str2[i]) + carry;
//     // determine if our addition results in a carry, set carry accordingly
//     carry = (temp >= 10) ? 1 : 0;

//     // tack our temp onto the front of our result (we're working right to left), %10 in case temp is 2 digits (carry should be 1)
//     result = String(temp % 10).concat(result)
//   }

//   // if our numbers are whole, we can tack the carry onto the front of the result, otherwise we'll send our carry back to be added to whole
//   if (type === "whole" && !!carry) result = String(carry).concat(result)
//   return (type === "whole") ? result : [result, carry]
// }


// function addStringNums(str1, str2) {
//   // split strs to deal with whole section and decimal section separately
//   let arr1 = str1.split("."), arr2 = str2.split(".")

//   // create vars for whole str & dec str, reverse whole so that we add 0s to the right side of the shorter whole #
//   let whole1 = reverse(arr1[0]), whole2 = reverse(arr2[0])
//   let dec1 = (arr1.length === 2) ? arr1[1] : "0";
//   let dec2 = (arr2.length === 2) ? arr2[1] : "0";

//   // fill shorter of whole # str and decimal # str with 0s to make equal lengths
//   if (whole1.length < whole2.length) 
//     whole1 = fillNum(whole1, whole2)
//   else 
//     whole2 = fillNum(whole2, whole1)

//   if (dec1.length < dec2.length) 
//     dec1 = fillNum(dec1, dec2)
//   else 
//     dec2 = fillNum(dec2, dec1)

//   // returns after adding wholes/ decimals together
//   let [resultDec, decCarry] = addNums(reverse(dec1), reverse(dec2))
//   let [resultWhole, wholeCarry] = addNums(whole1, whole2);

//   // if the whole number had a carry at the end:
//   if (wholeCarry === 1) resultWhole = "1".concat(resultWhole)

//   // if the decimal addition resulted in a carry to whole:
//   if (decCarry === 1) {
//     let tempArr = addNums(fillNum("1", resultWhole), reverse(resultWhole));
//     resultWhole = tempArr[0]
//     wholeCarry = tempArr[1]
//   }

//   return resultWhole.concat(".", resultDec)
// }

// // helpers

// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// function fillNum(shorter, larger) {
//   const dif = larger.length - shorter.length;
//   for (let i = 0; i < dif; i++) {
//     shorter = shorter.concat(0);
//   }
//   return shorter;
// }

// function addNums(str1, str2) {
//   let carry = 0;
//   let result = "";

//   for (let i = 0; i < str1.length; i++) {
//     let n1 = Number(str1[i]), n2 = Number(str2[i]) 
//     let temp = n1 + n2 + carry;
//     carry = (temp > 9) ? 1 : 0

//     result = result.concat(temp % 10)
//   }
//   return [reverse(result), carry]
// }

// console.log(addStrings("123.80008906", "1234356.234")) // 1234480.03408906
// console.log(addStrings("9.9", "9.9")) // 19.8
// console.log(addStrings("1", "2"))