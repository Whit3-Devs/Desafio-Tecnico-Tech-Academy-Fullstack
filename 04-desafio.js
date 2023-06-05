// 4.- Invertir un array (10 ptos).
// Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
// mismo pero invertido.
// Ejemplo arreglo original: [23,5,34,56,98,”cadena”,7] el arreglo invertido:
// [7,”cadena”,98,56,34,5,23].

function invertirArray(array) {
  console.log(`Array original [${array}]`);
  let reOrderArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reOrderArray.push(array[index]);
  }
  return `El array invertido es: [${reOrderArray}]\n`;
}

console.log(invertirArray([23, 5, 34, 56, 98, "cadena", 7]));
console.log(invertirArray([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(
  invertirArray([
    "auto",
    "moto",
    "barco",
    "roller",
    "skateboard",
    "sky",
    "lancha",
  ])
);
