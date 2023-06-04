// 2.- Múltiplos de un número dado (10 ptos).
// Escribir el código que muestre en consola los múltiplos de un número entero
// dado(definido en una variable para ser manipulado) en una secuencia del 1 al 100.
// Ejemplo si el número dado es 3 sus múltiplos serían 3,6,9,12,15…..21, etc.

console.log("Los multiplos de un numero dado del 1 al 100 son los siguientes:\n");

function multiplosDeUnNumero(numero) {
  let multiplo = numero;
  let cont = 0;

  console.log(`\nLos multiplos de ${multiplo} son:\n`);

  let suma = multiplo;
  while (multiplo <= 100) {
    console.log(`El multiplo de ${numero} es ${multiplo}.`);
    multiplo += suma;
  }
}

multiplosDeUnNumero(3);
multiplosDeUnNumero(4);
multiplosDeUnNumero(5);
multiplosDeUnNumero(6);
