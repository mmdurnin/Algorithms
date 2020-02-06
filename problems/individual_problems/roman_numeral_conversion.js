// roman numerals exercise
var romanToInt = function (s) {
    // store conversion key (e.g., {"I": 1, "V": 5 ...})
    // store a state that is either "add" or "subtract"
    // read from right to left
    // add 1, 5, 10, 50, 100, 500, 1000 depending on key if state is "add"
    // subtract if state = "subtract"
    // change state to "add"
    // set conditionals for changing state to subtract (if current === "X" and next === "I", change state to "subtract")

    let result = 0;
    let key = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let marker = "add"
    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i];
        let value = key[char];
        if (marker === "add") result += value;
        if (marker === "subtract") result -= value;

        if (i > 0) {
            marker = "add";
            let compareChar = s[i - 1];
            if ((char === "V" || char === "X") && compareChar === "I") marker = "subtract";
            if ((char === "L" || char === "C") && compareChar === "X") marker = "subtract";
            if ((char === "D" || char === "M") && compareChar === "C") marker = "subtract";
        }
    }
    return result;
};

console.log(romanToInt("III"))