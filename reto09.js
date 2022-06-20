function groupBy(collection, it) {
  // ¡No olvides compartir tu solución en redes!
  let data = {};
  if (typeof it === "function") {
    for (let i = 0; i < collection.length; i++) {
      if (!data[it(collection[i])]) {
        data[it(collection[i])] = [collection[i]];
      } else {
        data[it(collection[i])].push(collection[i]);
      }
    }
  } else if (typeof it === "string") {
    for (let i = 0; i < collection.length; i++) {
      if (!data[collection[i][it]]) {
        data[collection[i][it]] = [collection[i]];
      } else {
        data[collection[i][it]].push(collection[i]);
      }
    }
  }

  return data;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(["one", "two", "three"], "length")); // { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([{ age: 23 }, { age: 24 }], "age")); // { 23: [{age: 23}], 24: [{age: 24}] }
console.log(
  groupBy([1397639141184, 1363223700000], (timestamp) =>
    new Date(timestamp).getFullYear()
  )
);
console.log(
  groupBy(
    [
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 },
    ],
    "rating"
  )
);
