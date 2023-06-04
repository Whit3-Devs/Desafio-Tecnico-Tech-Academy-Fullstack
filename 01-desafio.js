// 1.- Random par o impar(10 ptos).
// Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
// devuelva si el número generado es par o impar.
// Ejemplo:
// Primera iteración: numeroGenerado = 5 // el número es impar
// Segunda iteración: numeroGenerado = 12 // el número es par

console.log("Los 5 numeros aleatorios seran par o impar, son los siguientes:\n");

const numeroAleatorio = () => parseInt(Math.random() * 100);

function esParImpar(numero) {
  if (numero % 2 == 1) {
    return `El numero ${numero} es impar.`;
  }
  return `El numero ${numero} es par.`;
}

for (let index = 1; index <= 5; index++) {
  console.log(`Iteración N°${index}: ${esParImpar(numeroAleatorio())}`);
}
