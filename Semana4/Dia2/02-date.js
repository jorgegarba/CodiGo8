// creando un objeto date con la fecha actual
let hoy = new Date();
console.log(hoy);


// Enero tiene el valor de '0'
// Diciembre '11'
let navidad = new Date(2019, 11, 25);
console.log("navidad");
console.log(navidad);


let halloweed = new Date("October 30 2019");
console.log(halloweed);

///////////////////////////////////////////////


// Obtener el año de una fecha
console.log(navidad.getFullYear());
// Obtener el numero de dia de una fecha
console.log(navidad.getDate());
// obtener el mes de una fecha
console.log(navidad.getMonth());
// obtener las horas de una fecha
console.log(navidad.getHours());

// restando 2 fechitas
let rpta = halloweed - navidad;
// imprimir la cantidad de semanas hay entre hallo y navidad
let segundos = rpta / 1000;
let minutos = segundos / 60;
let horas = minutos / 60;
let dias = horas / 24;
let semanas = dias / 7;

console.log(`Semanas restantes ${semanas}`);
