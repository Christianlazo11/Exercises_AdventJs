const carta = "bici coche balón _playstation bici coche peluche";
function listGifts(letter) {
  // ¡Tú puedes!
  letter = letter.trim();
  let data = letter.split(" ").filter((e) => e[0] !== "_");
  let dataObject = {};

  for (let i = 0; i < data.length; i++) {
    if (!dataObject[data[i]]) {
      dataObject[data[i]] = 1;
    } else {
      dataObject[data[i]] += 1;
    }
  }
  return dataObject;
}

const regalos = listGifts(carta);

console.log(regalos);
