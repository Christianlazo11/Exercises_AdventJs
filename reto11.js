function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  let price = 12;
  let priceFidel = 250;
  for (let i = 0; i < times; i++) {
    price = price * 0.75;
    priceFidel += price;
  }
  let normal = times * 12;

  if (priceFidel < normal) return true;
  return false;
}

console.log(shouldBuyFidelity(3));
console.log(shouldBuyFidelity(100));
