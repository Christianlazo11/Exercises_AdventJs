function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  // ¡No olvides compartir tu solución en redes!
  let data = new Array(coins.length).fill(0);
  for (let i = coins.length; i >= 0 && change > 0; i--) {
    let div = change / coins[i];
    let mod = change % coins[i];
    if (mod === 0) {
      change = 0;
      data[i] = Math.floor(div);
    } else if (mod >= 1) {
      change = change - Math.floor(div) * coins[i];
      data[i] = Math.floor(div);
    }
  }
  return data;
}

console.log(getCoins(16)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100));
