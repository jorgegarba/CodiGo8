class Playa {
  nombre;
  nroEspacios;
  vehiculos;
  constructor(nom, esp) {
    this.nombre = nom;
    this.nroEspacios = esp;
    this.vehiculos = [];
  }
  agregarVehiculo() {
    if (this.nroEspacios > this.vehiculos.length) {
      // aún quedan espacios
      let vehiculoTmp = {
        placa: '',
        modelo: '',
        marca: '',
      }

      vehiculoTmp.placa = prompt("Ingrese el placa del vehiculo");
      vehiculoTmp.modelo = prompt("Ingrese el modelo del vehiculo");
      vehiculoTmp.marca = prompt("Ingrese la marca del vehiculo");

      this.vehiculos.push(vehiculoTmp);
    } else {
      // ya no hay espacios
      alert("Ya no se pueden agregar mas vehiculos");
    }
  }
}


let objPlaya = new Playa('Rivero', 3);

do {
  opcion = +prompt(`===== MENU =====
                    1. Agregar un Vehiculo
                    2. Mostrar los Vehiculos
                    3. Opcion 3
                    4. Salir
                    =================`);
  switch (opcion) {
    case 1:
      objPlaya.agregarVehiculo();
      break;
    case 2:
      console.log(objPlaya.vehiculos);

      break;
    case 3:
      console.log("Escogió la opción 3");
      break;
    case 4:
      console.log("Hasta pronto");
      break;
    default:
      console.log("Error, ingrese una opción correcta");
      break;
  }
} while (opcion != 4)
