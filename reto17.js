const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

function countPackages(carriers, carrierID) {
  // ¡No olvides compartir tu solución en redes!

  const recursivePack = (arr, id) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(id)) {
        for (let j = 0; j < arr[i].length; j++) {
          if (typeof arr[i][j] === "number") sum += arr[i][j];
          if (Array.isArray(arr[i][j])) {
            let dataArr = arr[i][j];
            for (let k = 0; k < dataArr.length; k++) {
              sum += recursivePack(carriers, dataArr[k]);
            }
          }
        }
      }
    }

    return sum;
  };
  //console.log(recursivePack(carriers,carrierID ));
  return recursivePack(carriers, carrierID);
}

console.log(countPackages(carriers, "dapelu"));
console.log(countPackages(carriers2, "camila"));
