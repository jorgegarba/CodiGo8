// destructuración de arreglos
let numeros = [100, 2, 3, 4, 5, 6];
let [uno, segundo, ...resto] = numeros;
console.log(uno);
console.log(segundo);
console.log(resto);

let matriz = [100, 5, [7, 9], 90];
let [, , [siete]] = matriz;
console.log(siete);

// desctructurando los 2 primeros elementos del arreglo
// que llegue a la funcion
let sumarLosDosPrimeros = ([a, b]) => {
  console.log(a + b);
}

sumarLosDosPrimeros(numeros);

// destructuración de objetos
let objPersona = {
  nombre: 'Jorge',
  apellido: 'Garnica',
  dni: '11223344',
  edad: 20,
  nacionalidad: {
    pais: 'Perú',
    gentilicio: 'Peruano'
  },
  coloresFavoritos: ['Azul', 'Negro', 'Rojo']
};

// destructurar el 'nombre' con el mismo nombre de variable
let { nombre } = objPersona;
console.log(nombre);

// destructurar el 'nombre' con un nuevo nombre de variable
let { nombre: nom } = objPersona;
console.log(nom);

// destructurar varias variables a la vez
let { edad, dni } = objPersona;
console.log(`Edad ${edad}`);
console.log(`Dni ${dni}`);

// destructurar el gentilicio
let { nacionalidad: { gentilicio } } = objPersona;
console.log(gentilicio);

// desctructurar el color negro
let { coloresFavoritos: [, black] } = objPersona;
console.log(black);


let imprimirDni = ({ dni }) => {
  console.log(dni);
}

imprimirDni(objPersona);