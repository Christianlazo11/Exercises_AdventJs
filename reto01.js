const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(ovejas) {
  // aquí tu magia
  ovejas = ovejas.filter(
    (e) =>
      e.color === "rojo" &&
      e.name.toLowerCase().includes("a") &&
      e.name.toLowerCase().includes("n")
  );
  return ovejas;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
