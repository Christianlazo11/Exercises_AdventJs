function pangram(letter) {
  // ¡No olvides compartir tu solución en redes!
  let data = new Set(letter.match(/[a-zñáéíóúü]/gi)).size >= 27;
  return data;
}

console.log(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
console.log(
  pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true

console.log(
  pangram(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false
console.log(pangram("De la a a la z, nos faltan letras")); // false
