function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!
  ids = ids.sort((a, b) => {
    return a - b;
  });
  let max = 0;
  ids.forEach((e) => (e > max ? (max = e) : null));
  let num = 0;

  for (let i = 0; i <= max; i++) {
    console.log(i, ids[i]);
    if (i !== ids[i]) {
      num = i;
      break;
    }
  }
  if (num === 0) {
    if (ids[0] === 1) {
      return 0;
    }
    return ids[ids.length - 1] + 1;
  }
  return num;
}

console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
console.log(missingReindeer([0])); // -> 1 (¡es el último el que falta!)
console.log(missingReindeer([1]));
console.log(
  missingReindeer([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    27,
    28,
    29,
    30,
  ])
);
