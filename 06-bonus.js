// Ejercicio bonus - Convertir caracteres a mayúsculas. (15 ptos).
// Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
// los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
// antes y el después.
// Ejemplo: entrada: www.techacademy.com
// salida: WWW.techacademy.com

function convertirEnMayusculas(cadena) {
  console.log(`Cadena original: ${cadena}`);

  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index] == ".") {
      let cadenaAReemplazar = cadena.substring(0, index);
      let cadenaMayusculas = cadena.substring(0, index).toUpperCase();
      return console.log(
        `Cadena reemplazada por mayusculas hasta el primer punto: ${cadena.replace(
          cadenaAReemplazar,
          cadenaMayusculas
        )}\n`
      );
    }
  }
}

convertirEnMayusculas("www.techacademy.com");
convertirEnMayusculas("El veredicto es el siguiente: No podemos hacernos cargo de sus juicios. Pero si de su sentencia.");