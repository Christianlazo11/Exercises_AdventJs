const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

function contains(store, product) {
  return recursiveContains(store).some((e) => e === product);
}

function recursiveContains(data) {
  let arr = [];

  for (let i in data) {
    const dataContent = data[i];
    if (typeof dataContent === "object") {
      arr = [...arr, ...recursiveContains(dataContent)];
    } else if (typeof dataContent === "string") {
      arr.push(dataContent);
    }
  }

  return arr;
}

contains(otroAlmacen, "gameboy"); // false
contains(almacen, "camiseta"); // true
