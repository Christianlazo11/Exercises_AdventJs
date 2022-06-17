function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  let sum = 0;
  let data = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      if (sum === result) {
        data.push(numbers[i]);
        data.push(numbers[j]);
        return data;
      }
    }
  }
  return null;
}

sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
