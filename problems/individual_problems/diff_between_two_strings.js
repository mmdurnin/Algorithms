function diffBetweenTwoStrings(source, target) {

    let store = [];

    while (source.length && target.length && source[0] === target[0]) {
        store.push(source[0]);
        source = source.slice(1);
        target = target.slice(1);
    }



    let optionA = explore(store, neg(source[0]), source.slice(1), target);
    let optionB = explore(store, pos(target[0]), source, target.slice(1));

    return optionA.length < optionB.length ? optionA : optionB;
}

function explore(store, edit, source, target) {
    store = store.concat(edit)


    if (!source.length && !target.length) return store;
    if (!source.length) return append(store, "pos", target);
    if (!target.length) return append(store, "neg", source);

    while (!!source.length && !!target.length && source[0] === target[0]) {
        store.push(source[0]);
        source = source.slice(1);
        target = target.slice(1);
    }

    let optionA = explore(store, neg(source[0]), source.slice(1), target);
    let optionB = explore(store, pos(target[0]), source, target.slice(1));
    return optionA.length > optionB.length ? optionB : optionA;
}

function append(store, sign, tail) {
    for (i = 0; i < tail.length; i++) {
        store = store.concat(sign === "pos" ? pos(tail[i]) : neg(tail[i]))
    }
    return store;
}

function neg(key) {
    if (!key) return [];
    return "-" + key
}

function pos(key) {
    if (!key) return [];
    return "+" + key
}

console.log("ABCDEFG", "ABDFFGH")
console.log(diffBetweenTwoStrings("ABCDEFG", "ABDFFGH"))
console.log("CABAAABBC", "CBBC")
console.log(diffBetweenTwoStrings("CABAAABBC", "CBBC"))

// console.log(append(["a", "b", "c"], "pos", ["B", "E", "M"]))



