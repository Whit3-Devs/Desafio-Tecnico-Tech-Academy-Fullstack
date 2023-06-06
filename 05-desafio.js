class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  getDetalles() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Edad: ${this.edad}`);
  }
}

class Jugador extends Persona {
  constructor(nombre, apellido, edad, posicion) {
    super(nombre, apellido, edad);
    this.posicion = posicion;
  }

  getDetalles() {
    super.getDetalles();
    console.log(`Posicion: ${this.posicion}`);
  }
}

const numeroAleatorio = () => parseInt(Math.random() * 10000);

class Entrenador extends Persona {
  constructor(
    nombre,
    apellido,
    edad,
    aniosExp,
    idFederacion = numeroAleatorio()
  ) {
    super(nombre, apellido, edad);
    this.aniosExp = aniosExp;
    this.idFederacion = idFederacion;
  }

  getDetalles() {
    super.getDetalles();
    console.log(`Años de Experiencia: ${this.aniosExp}`);
    console.log(`ID de Federacion: ${this.idFederacion}.`);
  }
}

// const entrenadorNuevo = new Entrenador("Augusto", "Blanco", 24, 2, 2345);
// const obtenerNuevo = entrenadorNuevo.getDetalles();
// console.log(obtenerNuevo);

class Equipo {
  constructor(entrenador, jugadores) {
    this.entrenador = entrenador;
    this.jugadores = jugadores;
  }

  getDetalles() {
    console.log(`Datos del entrenador:`);
    this.entrenador.getDetalles();
    console.log(`Datos de los jugadores:\n`);
    this.jugadores.forEach((jugador) => {
      jugador.getDetalles();
      console.log(`//////////////////////---------------------/////////////////////`);
    });
  }
}


const jugadores = [
  new Jugador("Augusto", "Blanco", 24, "Delantero"),
  new Jugador("Julian", "Ramirez", 20, "Medio"),
  new Jugador("Ivan", "Blanco", 26, "Defensa"),
  new Jugador("Pablo", "Ramirez", 17, "Delantero"),
];


const entrenador = new Entrenador("Javier", "Mascherano", 38, 3);

const equipo = new Equipo(entrenador, jugadores);

equipo.getDetalles();