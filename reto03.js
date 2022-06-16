const data01 = "bici coche (balón) bici coche peluche";
const data02 = "(muñeca) consola bici";
const data03 = "(peluche {) bici";
const data04 = "() bici";
const data05 = "(a() bici (a)";
const data06 = "(a) (b) (c)";

function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  const errors = ["{", "}", "[", "]", "("];
  let cor01 = {
    valid: false,
    position: 0,
  };
  let cor02 = {
    valid: false,
    position: 0,
  };
  let content = false;
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === "(" && !cor01.valid) {
      cor01.valid = true;
      cor01.position = i;
    }
    if (cor01.valid) {
      console.log("entra", letter[i]);
      if (errors.includes(letter[i + 1])) {
        return false;
      }
      if (letter[i] === ")" && !cor02.valid) {
        cor02.valid = true;
        cor02.position = i + 1;
        let text = letter.slice(cor01.position, cor02.position);

        text = text
          .split("")
          .filter((e) => e !== "(" && e !== ")")
          .join("");
        if (text !== "" && text !== "()") return true;
      }
    }
  }
  if (cor01.valid && cor02.valid && content) return true;
  return false;
}

console.log(isValid(data06));
