// creando un objeto
let vehiculo = {
  placa: 'EMD-123',
  color: 'Rojo',
  marca: 'Mazda',
  modelo: 'CX-3',
};

console.log(vehiculo.modelo);

// modificando sus propiedades
vehiculo.color = 'Azul';

console.log(vehiculo);

// ====================

let persona = {
  nombre: 'Gabriela',
  apellido: 'Jimenez',
  coloresFavoritos: ['Azul', 'Negro', 'Rosa']
};

console.log(persona.coloresFavoritos);

// ================
let album = {
  anio: 2019,
  autor: 'Gian Marco',
  nombre: 'Resistir',
  canciones: [
    {
      titulo: 'Cancion 1',
      duracion: 4.20,
    },
    {
      titulo: 'Cancion 2',
      duracion: 5.00,
    }
  ]
};
// imprimiendo el titulo de la cancion 2
console.log(album.canciones[1].titulo);

// ========================== 


let restaurante = {
  nombre: 'La panchita',
  direccion: 'Av. Siempre Viva',
  tenedores: 5,
  pedidos: [
    {
      id: 1,
      plato: 'Lomo Saltado'
    },
    {
      id: 2,
      plato: 'Chaufita'
    }
  ],
  mostrarPedidos: () => {

    console.log("Mostrando los pedidos");
    console.log(restaurante.pedidos);

  },
};

restaurante.mostrarPedidos();

//  =======================

let libro = {
  autor: 'Clorinda Matto de Turner',
  titulo: 'Aves sin nido',
  editorial: {
    nombre: 'Editorial 1',
    anioPub: 2019
  }
};

console.log(libro.editorial.anioPub);

// ===============
// Cree un objeto de nombre 'objFactura', que tenga
// la estructura de una factura
// propiedades
/**
 * 1. cabecera (objeto)
    * 1.1. ruc (string)
    * 1.2. razonSocial (string),
    * 1.3. fecha (string),
    * 1.4. nro (string)
 * 2. detalle (arreglo de objetos)
    * Cada objeto dentro del detalle, debera tener
    * 2.1 cant (numero),
    * 2.2 descripcion (string)
    * 2.3 precioUnit (numero)
    * 2.4 total (numero)
 * 3. totalFacura (numero) // total de la factura
 * 4. agregarDetalle (function) //
 *    agregará un objeto de tipo 'detalle'
 *    al arreglo de detalles
 */

let objFactura = {
  cabecera: {
    ruc: '',
    razonSocial: '',
    fecha: '',
    nro: ''
  },
  detalles: [
    {
      cant: 0,
      descripcion: "",
      precioUnit: 0,
      total: 0,
    },
    {
      cant: 0,
      descripcion: "",
      precioUnit: 0,
      total: 0,
    }
  ],
  totalFacura: 0,
  agregarDetalle: () => {
    let detalleTmp = {
      cant: 0,
      descripcion: "",
      precioUnit: 0,
      total: 0,
    };
    objFactura.detalles.push(detalleTmp);
  }
}

console.log(objFactura);
objFactura.agregarDetalle();
console.log(objFactura);

