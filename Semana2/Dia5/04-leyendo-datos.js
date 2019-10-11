// capturan datos del usuario
// todo dato introducido por el usuario se convierte
// en un string
var edad = prompt("Introduce tu edad");

// convertir un string en un numero entero
// si el numero introducido es un decimal.
// redondea el valor a un numero entero
var edadNumeroEntero = parseInt(edad);
console.log(edadNumeroEntero + 2);

// convertir un string en un numero(entero o decimal)
var edadNumero = +edad;
console.log(edadNumero + 2);