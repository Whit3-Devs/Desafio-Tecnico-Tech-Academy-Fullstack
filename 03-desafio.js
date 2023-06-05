// 3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
// Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
// veces se repite un carácter dado en dicha cadena de texto.
// Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
// se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
// “hola como estas”.


function contarCaracteres(cadenaDeTexto, caracter) {
  cont = 0;
  for (const letra of cadenaDeTexto) {
    if(letra == caracter) cont++;
  }

  return `\nEl caracter "${caracter}" en el texto "${cadenaDeTexto}" se repite un total de ${cont} ${cont == 1 ? "vez" : "veces"}.`;

}

console.log(contarCaracteres("Hola, como estas?", "a"));
console.log(contarCaracteres("Hola, como estas?", "o"));
console.log(contarCaracteres("Hola, como estas?", "?"));