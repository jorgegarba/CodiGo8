let Alumno = function (nom, ape) {
  let a = {
    nombre: nom,
    apellido: ape,
    mostrarInfo: function () {
      console.log(`${this.nombre} ${this.apellido}`);
    }
  }
  return a;
}

let objJorge = new Alumno('Jorge', 'Garnica');
objJorge.mostrarInfo();











// ===========================================

class Prosor {

  nombre;
  apellido;

  constructor(nom, ape) {
    this.nombre = nom;
    this.apellido = ape
  }

  mostrarInfo() {
    console.log(`${this.nombre} ${this.apellido}`);
  }

}

let profe1 = new Prosor('Daniel', 'Berrios');
profe1.mostrarInfo();
console.log(profe1.nombre);
