// var rpta = "si";
// var nombre = "";

// while (rpta == "si") {

//   nombre = prompt("Ingresa un nombre");

//   console.log(`Ingresaste ${nombre}`);

//   rpta = prompt("Quieres ingresar otro nombre?");

// }

// console.log("Fin del Programa");

// un programa para calcular la multiplicacion
// de dos numeros sin usar el operador (*)
// solo pueden usar sumas y restas
// con while

// var a = +prompt("Ingrese el primer numero");
// var b = +prompt("Ingrese el segundo numero");
// var total = 0;
// debugger;
// while (a > 0) {
//   total = total + b;
//   a = a - 1;
// }
// console.log(`TOTAL ${total}`);

// un programa para calcular la división entera
// de dos numeros utilizando sumas y restas
// mostrar además el cociente y el residuo

var D = prompt("Ingrese el divisor");
var d = prompt("Ingrese el dividendo");
var q = 0;

while ((D - d) >= 0) {
  q++;//1//2
  D = D - d;//5//2
}
console.log(`Division => ${q}`);
console.log(`residuo => ${D}`);



