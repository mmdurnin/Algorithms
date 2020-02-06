//leetcode

isValid = function (s) {
    const left = { '(': 1, '[': 2, '{': 3 };
    const right = { ')': 1, ']': 2, '}': 3 };
    let open = [];

    for (let i = 0; i < s.length; i++) {
        let symbol = s[i];
        if (!!left[symbol]) {
            open.push(symbol)
        } else if (!!right[symbol]) {
            if (open.length === 0) return false;
            let partner = open.pop();
            if (left[partner] !== right[symbol]) return false;
        }
    }

    if (open.length !== 0) return false;
    return true;
}

console.log(isValid("(){}[]"));