const files = ["photo", "postcard", "photo", "photo", "video"];
const files2 = ["file", "file", "file", "game", "game"];
const files3 = [
  "file",
  "file(1)",
  "icon",
  "icon(1)",
  "icon(1)",
  "icon(1)",
  "icon(1)",
  "icon(1)",
];
function fixFiles(files) {
  // ¡No olvides compartir tu solución en redes

  const cont = {};

  return files.reduce((acc, current) => {
    acc.push(acc.includes(current) ? `${current}(${cont[current]})` : current);
    cont[current] = (cont[current] ?? 0) + 1;
    return acc;
  }, []);
}

console.log(fixFiles(files));
console.log(fixFiles(files2));
console.log(fixFiles(files3));
