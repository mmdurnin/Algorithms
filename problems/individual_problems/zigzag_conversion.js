var convert = function (s, numRows) {

  if (numRows >= s.length || numRows === 1) return s;
  numRows -= 1;

  let dir = "up";
  let store = {};
  
  for (let i = 0; i < s.length; i++) {
    store = count(dir, numRows, s, i, store)
    dir = dir === "up" ? "down" : "up";
    i += numRows - 1;
  };

  let keys = Object.keys(store), result = "";

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i], ss = store[key];
    result = result.concat(ss);
  }
  
  return result;
};

function count(dir, count, s, idx, store) {
  let i = 0, track;
  if (dir === "up") track = 0;
  if (dir === "down") track = count;

  while (i < count && idx < s.length) {
    store[track] = (store[track]) ? store[track].concat(s[idx]) : s[idx];
    idx++;
    i++;

    if (dir ==="up") {
      track++;
    } else {
      track--;
    }
  };

  return store;
}

/*
P      S
A    I H
Y   L  I   G
P A    R N
P      I

input: "PAYPALISHIRING"
output:"PSAIHYLIGPARNPI"

can we assume that numRows < s?

iterate through string, assign each letter an incremented count up to numRows and back down to 0
iterate through object.keys of counts, push each set of letters into result string
(e.g., {0: PS, 1: AIH, 2: YLIG...} => "PS" + "AIH"...)

*/

console.log(convert("PAYPALISHIRING", 3))
console.log(convert("PAYPALISHIRING", 4))
console.log(convert("A", 1))
console.log(convert("AB", 1))