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
