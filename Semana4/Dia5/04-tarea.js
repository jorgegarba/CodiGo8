

// TAREITA
let paises = [
  { idPais: 1, nombrePais: 'Perú', },
  { idPais: 2, nombrePais: 'Bolivia', },
  { idPais: 3, nombrePais: 'Brasil', }
];
let ciudades = [
  { idCiudad: 1, idPais: 1, nombreCiudad: "Lima" },
  { idCiudad: 2, idPais: 1, nombreCiudad: "Puno" },
  { idCiudad: 3, idPais: 2, nombreCiudad: "La Paz" },
  { idCiudad: 4, idPais: 2, nombreCiudad: "Cochabamba" },
  { idCiudad: 5, idPais: 3, nombreCiudad: "Sao Paulo" },
  { idCiudad: 6, idPais: 3, nombreCiudad: "Brasilia" },
]

// crear un select donde figuren todos los paises

// crear un select donde figuren las ciudades del
// pais seleccionado
// Si no hay pais seleccionado el select de las ciudades
// debera estar bloqueado
// select.setAttribute("disabled",true);

// Crear un boton debajo de ambos selects
// el boton solo debe responder al click e imprmiir
// el nombre del pais y la ciudad seleccionada
// cuando ambos selects tengan valores reales