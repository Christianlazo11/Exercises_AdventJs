const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesEth = [10, 20, 30, 40, 50, 60, 70];
const pricesDoge = [18, 15, 12, 11, 9, 7];
const pricesAda = [3, 3, 3, 3, 3];

function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
  let lengths = Math.floor(prices.length / 2);
  let data01 = prices.slice(0, lengths);
  let data02 = prices.slice(lengths, lengths * 2 + 1);
  let max = 0;
  let min = 10000;
  let total = 0;

  data01.forEach((e) => (e < min ? (min = e) : null));
  data02.forEach((e) => (e > max ? (max = e) : null));

  total = max - min;
  if (total === 0 || total < 0) return -1;
  return total;
}

console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)
