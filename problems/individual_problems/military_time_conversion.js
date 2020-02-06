//convert input to military time
function timeConversion(s) {
    const convert = (s[s.length - 2] === "P") ? true : false

    s = s.slice(0, s.length - 2)
    let splitTime = s.split(":")
    let temp = splitTime[0]
    if (!!convert && temp !== "12") {
        temp = parseInt(temp) + 12
    }
    if (!convert && temp === "12") {
        temp = "00"
    }

    temp = temp.toString();
    splitTime.shift()
    splitTime.unshift(temp);
    return splitTime.join(":")
}

console.log(timeConversion("07: 05: 45PM"))
console.log(timeConversion("12: 05: 45PM"))
console.log(timeConversion("12: 05: 45AM"))
