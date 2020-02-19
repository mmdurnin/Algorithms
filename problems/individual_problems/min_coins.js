function minNumberOfCoinsForChange(n, denoms) {
  let coinCounts = new Array(n + 1).fill(Infinity);
  coinCounts[0] = 0;

  for (coin of denoms) {
    for (i = 1; i < coinCounts.length; i++) {
      if (coin <= i) {
        coinCounts[i] = Math.min(coinCounts[i], 1 + coinCounts[i - coin])
      }
    }
    console.log(coin)
    console.log(coinCounts);
  }
  return coinCounts[coinCounts.length - 1] === Infinity
    ? -1
    : coinCounts[coinCounts.length - 1];
}

console.log(minNumberOfCoinsForChange(10, [1, 5, 7]))