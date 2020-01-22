//   // ABCDEFG
//   // ABDFFGH
//   // output ->> A B -C D -E F +F G +H

// // this doesnt work:

// function diffBetweenTwoStrings(source, target) {
// 	/**
// 	@param source: string
// 	@param target: string
// 	@return: string[]
// 	*/

//     // ABCDEFG
//     // ABDFFGH

//     let result = [];
//     const sourceStore = {};
//     const targetStore = {};
//     const longerWord = source.length > target.length ? source : target

//     for (let i = 0; i < longerWord.length; i++) {

//         if (!!source[i]) {
//             let sourceLetter = source[i]
//             sourceStore[sourceLetter] = sourceStore[sourceLetter] ? sourceStore[sourceLetter] + 1 : 1
//         };

//         if (!!target[i]) {
//             let targetLetter = target[i];
//             targetStore[targetLetter] = targetStore[targetLetter] ? targetStore[targetLetter] + 1 : 1
//         }
//     }

//     Object.keys(sourceStore).forEach((key) => {
//         if (!!targetStore[key]) {
//             // find the minimum # of times they both occur and push that in without a sign
//             let min = targetStore[key] > sourceStore[key] ? sourceStore[key] : targetStore[key]
//             result = result.concat(pushNumTimes(min, key, ""));

//             // find the # of times it occuurs in one string and not the other
//             // if occurs in target, push with +
//             // if occurs in souce, push with -
//             let diff = targetStore[key] - sourceStore[key];
//             let sign = diff > 0 ? "+" : "-";

//             if (diff !== 0) result = result.concat(pushNumTimes(diff, key, sign));
//         } else {
//             console.log("it didn't occur in target")
//             // if it only occurs in souce and not target, push in with -
//             result = result.concat(pushNumTimes(sourceStore[key] * -1, key, "-"))
//         }
//     })

//     Object.keys(targetStore).forEach((key) => {
//         if (!sourceStore[key]) {
//             result = result.concat(pushNumTimes(targetStore[key], key, "+"))
//         }
//     })

//     return result;
// }

// function pushNumTimes(diff, letter, sign) {
//     let arr = [];
//     let numTimes = Math.abs(diff)
//     for (i = 0; i < diff; i++) {
//         if (sign === "-") {
//             arr.push(`-` + letter);
//         } else if (sign === "+") {
//             arr.push(`+` + letter);
//         } else {
//             arr.push(letter);
//         }
//     }

//     return arr
// }




function diffBetweenTwoStrings(source, target) {
    // A B /C/ D /E/ F  _ G _
    // A B  _  D  _ F /F/ G H
    //>> A B -C D -E F +F G +H

    //  "CBBC"
    //  "CABAABBC"
    //>> ["C","-A","B","-A","-A","-A","B","-B","C"]

    // "AABACC"  A  ABACC B  ACC  C  C  C
    // "BABCAC"  A  BCAC  B  CAC  C  AC C
    //>> ["-A","-A","B","A","+B","C","+A","C"]



    // ideas:
    // -sort?
    // -double loop?
    // -hash storage?
    arr = [];
    if (source.length === 1 && target.length === 1) {
        return source[0] === target[0] ? [source[0]] : [(neg(source[0])), (pos(target[0]))];

    } else if (source.length === 1) {
        console.log("source")
        console.log(source)
        console.log("target")
        console.log(target)
        let compare = true;
        for (i = 0; i < target.length; i++) {
            if (target[i] === source[0] && compare === true) {
                arr.push(target[i]);
                compare = false;
            } else {
                arr.push(pos(target[i]));
            }
        }
        console.log("arr")
        console.log(arr)
        return arr;

    } else if (target.length === 1) {
        let compare = true;
        for (i = 0; i < source.length; i++) {
            if (source[i] === target[0] && compare === true) {
                arr.push(source[i]);
                compare = false;
            } else {
                arr.push(neg(source[i]));
            }
        }
        return arr;
    }


    if (source[0] === target[0]) {
        return [source[0]].concat(diffBetweenTwoStrings(source.slice(1), target.slice(1)));
    } else {
        let poss1 = diffBetweenTwoStrings(source.slice(1), target);
        let poss2 = diffBetweenTwoStrings(source, target.slice(1));

        if (poss2.length > poss1.length) {
            return [pos(target[0])].concat(poss1);
        } else {
            return [neg(source[0])].concat(poss2);
        }
    }

}


function neg(key) {
    return "-" + key
}

function pos(key) {
    return "+" + key
}

console.log("ABCDEFG", "ABDFFGH")
console.log(diffBetweenTwoStrings("ABCDEFG", "ABDFFGH"))
console.log("CABAAABBC", "CBBC")
console.log(diffBetweenTwoStrings("CABAAABBC", "CBBC"))