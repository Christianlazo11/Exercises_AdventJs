function wrapGifts(gifts) {
  let data = [];
  if (gifts.length === 0) {
    return data;
  } else {
    for (let i = 0; i < gifts.length; i++) {
      data.push(`*${gifts[i]}*`);
    }

    if (gifts[0].length > 2) {
      data.unshift("*".repeat(gifts[0].length * 2 - 2));
      data.push("*".repeat(gifts[0].length * 2 - 2));
    } else {
      data.unshift("*".repeat(gifts[0].length * 2));
      data.push("*".repeat(gifts[0].length * 2));
    }
    return data;
  }
}

console.log(wrapGifts(["📷", "⚽️"]));
console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
