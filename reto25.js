const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

function canMouseEat(direction, game) {
  // ¡Gracias por jugar a AdventJS 2021! 🤗
  // ¡Nos vemos el año que viene! 👋
  // Por favor, comparte en las redes qué te ha parecido! 🚀
  let fil;
  let col;
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] === "m") {
        fil = i;
        col = j;
      }
    }
  }
  switch (direction) {
    case "up":
      fil = fil -= 1;
      if (fil < 0) return false;
      if (game[fil][col] === "*") return true;
      break;
    case "down":
      fil = fil += 1;
      if (fil >= game.length) return false;
      //console.log(game[fil][col]);
      if (game[fil][col] === "*") return true;
      break;
    case "right":
      col = col += 1;
      if (col >= game[fil].length) return false;
      //console.log(game[fil][col]);
      if (game[fil][col] === "*") return true;
      break;
    case "left":
      //console.log(game[fil][col]);
      col = col -= 1;
      if (col < 0) return false;
      if (game[fil][col] === "*") return true;
      break;
  }
  return false;
}

console.log(canMouseEat("up", room));
console.log(canMouseEat("down", room));
console.log(canMouseEat("right", room));
console.log(canMouseEat("left", room));
console.log("-------------------");

console.log(canMouseEat("up", room2));
console.log(canMouseEat("down", room2));
console.log(canMouseEat("right", room2));
console.log(canMouseEat("left", room2));
