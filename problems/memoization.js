function fastFib(num, memo={}) {
    if (num in memo) return memo[num]
    if (num === 1) return 1
    if (num === 2) return 1

    const f1 = fastFib((num-1), memo)
    const f2 = fastFib((num - 2), memo)

    memo[num] = f1 + f2
    return memo[num]
}

console.log(fastFib(5))