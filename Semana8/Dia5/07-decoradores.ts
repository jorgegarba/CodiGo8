function decorador() {
  return function (clase) {
    clase.prototype.hoy = (new Date()).getFullYear();
    clase.prototype.saludar = function () {
      console.log("estoy saludando");
    }
  }
}

@decorador()
class Aula{
  capacidad: number;
  tipo: string;
  constructor(_capacidad: number, _tipo: string) {
    this.capacidad = _capacidad;
    this.tipo = _tipo;
  }
  imprimirDatos() {
    console.log(`Capacidad: ${this.capacidad}`);
    console.log(`Tipo: ${this.tipo}`);
  }
}


let objAula = new Aula(80, "Laboratorio");
console.log(objAula.hoy);
objAula.saludar();
