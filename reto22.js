const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
};
const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};

function countDecorations(bigTree) {
  // ¡No olvides compartir tu solución en redes!
  let total = 0;

  const recursiveCount = (data) => {
    let totalValues = 0;
    if (typeof data === "object") {
      for (let i in data) {
        if (i === "value") {
          totalValues += data[i];
        } else if (i === "left" && data[i] !== null) {
          totalValues += recursiveCount(data[i]);
        } else if (i === "right" && data[i] !== null) {
          totalValues += recursiveCount(data[i]);
        }
      }
    } else if (typeof data === "number") {
      totalValues += data;
    }
    return totalValues;
  };
  for (let i in bigTree) {
    total += recursiveCount(bigTree[i]);
  }
  return total;
}

console.log(countDecorations(tree));
console.log(countDecorations(bigTree));
