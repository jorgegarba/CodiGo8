let crearVehiculo = () => {
  let claseVehiculo = {
    placa: 'VMF-123',
    marca: 'Mazda',
    modelo: 'CX-9',
    mostrarDatos: function () {
      console.log(`${this.marca} ${this.modelo}`);
    }
  };
  return claseVehiculo;
}

let objVehiculo1 = crearVehiculo();
objVehiculo1.marca = 'Toyota';

let objVehiculo2 = crearVehiculo();

objVehiculo1.mostrarDatos();
objVehiculo2.mostrarDatos();


// ==============================

let Playa = function (dir, nro, pph) {

  let clasePlaya = {
    direccion: dir,
    nroEspacios: nro,
    precioPorHora: pph,
    imprimiDatos: function () {
      console.log(`${this.direccion} ${this.nroEspacios} ${this.precioPorHora}`);
    }
  };

  return clasePlaya;

}

let playa1 = new Playa('Av. Luna Pizarro', 10, 5);
playa1.imprimiDatos();



let playa2 = new Playa('Av. Brasil', 15, 3.5);
playa2.imprimiDatos();