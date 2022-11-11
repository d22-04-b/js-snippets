function amountTocoinsFor(amount, arrCoins) {
  let arrCoinsPayoutTotal = [];

  for (let coin of arrCoins) {
    if (coin <= amount) {
      const amountOfCoinsPayout = parseInt(amount / coin);
      const coinPayout = new Array(amountOfCoinsPayout).fill(coin);
      arrCoinsPayoutTotal = arrCoinsPayoutTotal.concat(coinPayout);
      amount -= coin * amountOfCoinsPayout;
      if (amount === 0) break;
    }
  }

  console.log(arrCoinsPayoutTotal);
  return arrCoinsPayoutTotal;
}

// TESTS
amountTocoinsFor(50, [25, 10, 5, 2, 1]); // OUTPUT: [25,25]
amountTocoinsFor(46, [25, 10, 5, 2, 1]); // OUTPUT: [25,10,10,1]
amountTocoinsFor(6, [25, 10, 5, 2, 1]); // OUTPUT: [5,1]
amountTocoinsFor(5, [25, 10, 5, 2, 1]); // OUTPUT: [5]
amountTocoinsFor(1, [25, 10, 5, 2, 1]); // OUTPUT: [1]
// amountTocoinsFor(1000000000, [25, 10, 5, 2, 1]); // OUTPUT: [25,25]
