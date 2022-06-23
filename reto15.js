function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  let sube = false;
  let baja = false;
  for (let i = 0; i < heights.length; i++) {
    if (i !== heights.length - 1) {
      if (heights[i] === heights[i + 1]) {
        return false;
      } else if (heights[i] < heights[i + 1] && !baja) {
        sube = true;
        //console.log("sube");
      } else if (heights[i] > heights[i + 1] && sube) {
        baja = true;
        //console.log("baja");
      } else {
        return false;
      }
    }
  }
  if (sube && baja) return true;
  return false;
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
