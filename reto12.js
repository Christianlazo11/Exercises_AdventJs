const obstacles01 = [5, 3, 6, 7, 9];
const obstacles02 = [2, 4, 6, 8, 10];
const prueba01 = [1, 2, 3, 5];
const prueba02 = [3, 7, 5];
const prueba03 = [9, 5, 1];
const prueba04 = [14, 10, 8, 2, 3, 6];

function getMinJump(obstacles) {
  let max = 0;
  obstacles.forEach((e) => (e > max ? (max = e) : null));
  const long = {
    1: 2,
    2: 2,
    3: 3,
    4: 4,
    5: 10,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  obstacles = obstacles.sort();
  // ¡No olvides compartir tu solución en redes!
  let data = "";
  for (let i = 0; i <= max; i++) {
    if (obstacles.includes(i)) {
      data += "x";
    } else {
      data += ".";
    }
  }
  console.log(data);
  for (let i = 1; i < 10; i++) {
    let cont = 1;
    let pos = long[i] * cont;
    //console.log(data[]);

    while (data[pos] === "." && pos <= data.length) {
      //console.log("Entro en", i);
      cont++;
      pos = long[i] * cont;
    }
    if (pos >= data.length) {
      return long[i];
    }
  }
}

console.log(getMinJump(prueba04));
