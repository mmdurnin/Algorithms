function fastFib(num, memo={}) {
    if (num in memo) return memo[num]
    if (num === 1) return 1
    if (num === 2) return 1

    const f1 = fastFib((num-1), memo)
    const f2 = fastFib((num - 2), memo)

    memo[num] = f1 + f2
    return memo[num]
}

// console.log(fastFib(5))


// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100

// function minChange(coins, amount, memo = {}) {
//     if (amount === 0) return 0;
//     // if (coins.includes(amount)) return 1;

//     let numCoins = [];
//     coins.forEach((coin) => {
//         numCoins.push(minChange(coins, amount - count) + 1);
//     });


// }

function minChange(coins, amount, memo = {}) {
  if (amount === 0) return 0;
  if (coins.includes(amount)) return 1;

  let coin_count = 0;

  for (let i = coins.length - 1; i >= 0; i--) {
    if (amount > coins[i]) {
      amount -= coins[i];
      coin_count = coin_count + minChange(coins, amount, memo);
      console.log(coin_count)
      return coin_count;
    }
  }
}

console.log(minChange([1, 5, 10, 25], 100))