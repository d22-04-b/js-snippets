function amountTocoinsWhile(amount, arrCoins) {
  let arrCoinsPayoutTotal = [];
  let coinIndex = 0;

  while (amount > 0) {
    let coin = arrCoins[coinIndex];
    if (coin <= amount) {
      arrCoinsPayoutTotal.push(coin);
      amount -= coin;
    } else coinIndex++;
  }

  console.log(arrCoinsPayoutTotal);
  return arrCoinsPayoutTotal;
}

// TESTS
amountTocoinsWhile(50, [25, 10, 5, 2, 1]); // OUTPUT: [25,25]
amountTocoinsWhile(46, [25, 10, 5, 2, 1]); // OUTPUT: [25,10,10,1]
amountTocoinsWhile(6, [25, 10, 5, 2, 1]); // OUTPUT: [5,1]
amountTocoinsWhile(5, [25, 10, 5, 2, 1]); // OUTPUT: [5]
amountTocoinsWhile(1, [25, 10, 5, 2, 1]); // OUTPUT: [1]
// amountTocoinsWhile(1000000000, [25, 10, 5, 2, 1]); // OUTPUT: [25,25]

