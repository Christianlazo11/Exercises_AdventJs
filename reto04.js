function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let data = "";
  let ask = 1;
  let cont = 1;
  for (let i = 0; i < height; i++) {
    let num = height - cont;
    data += "_".repeat(num);
    data += "*".repeat(ask);
    data += "_".repeat(num);
    ask += 2;
    cont++;
    data += "\n";
  }

  for (let i = 0; i < 2; i++) {
    let num = height - 1;
    data += "_".repeat(num);
    data += "#";
    data += "_".repeat(num);
    if (i !== 1) data += "\n";
  }
  return data;
}

console.log(createXmasTree(10));
