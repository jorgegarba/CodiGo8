// var n1 = +prompt("Ingrese el primer valor");
// var n2 = +prompt("Ingrese el segundo valor");;
// var n3 = +prompt("Ingrese el tercer valor");

// if (n1 > n2) {
//   if (n1 > n3) {
//     console.log(`El mayor es ${n1}`);
//     if (n2 > n3) {
//       console.log(`El menor es ${n3}`);
//       console.log(`El medio es ${n2}`);
//     } else {
//       console.log(`El menor es ${n2}`);
//       console.log(`El medio es ${n3}`);
//     }
//   } else {
//     console.log(`El mayor es ${n3}`);
//     console.log(`El menor es ${n2}`);
//     console.log(`El medio es ${n1}`);
//   }
// } else {
//   if (n3 > n2) {
//     console.log(`El mayor es ${n3}`);
//     console.log(`El menor es ${n1}`);
//     console.log(`El medio es ${n2}`);
//   } else {
//     if (n3 > n1) {
//       console.log(`El mayor es ${n2}`);
//       console.log(`El menor es ${n1}`);
//       console.log(`El medio es ${n3}`);
//     } else {
//       console.log(`El mayor es ${n2}`);
//       console.log(`El menor es ${n3}`);
//       console.log(`El medio es ${n1}`);
//     }
//   }
// }

// EJERCICIO PLAYA ESTACIONAMIENTO
// FORMA 1
// var horas = +prompt("Ingrese el numero de horas");

// if (horas > 10) {
//   console.log(`Total => ${37 + ((horas - 10) * 2)}`);
// } else {
//   if (horas > 5) {
//     console.log(`Total => ${22 + ((horas - 5) * 3)}`);
//   } else {
//     if (horas > 2) {
//       console.log(`Total => ${10 + ((horas - 2) * 4)}`);
//     } else {
//       console.log(`Total => ${horas * 5}`);
//     }
//   }
// }

// FORMA 2

// var horas = +prompt("ingrese las horas:");
// var monto = 0;
// if (horas >= 2) {
//   monto = 5 * 2;
//   horas = horas - 2;
//   if (horas >= 3) {
//     monto = monto + 4 * 3;
//     horas = horas - 3;
//     if (horas >= 5) {
//       monto = monto + 3 * 5;
//       horas = horas - 5;
//       if (horas > 0) {
//         monto = monto + horas * 2;
//       }
//     } else {
//       monto = monto + 3 * horas;
//     }
//   } else {
//     monto = monto + 4 * horas;
//   }
// } else {
//   monto = 5 * horas;
// }
// console.log("El monto a pagar es: ", monto);



// es bisiesto cuando es divisible por 4 pero no por 100 
// es bisiesto cuando es divisilble por 400
// cualquier otro caso, no es divisible

var anio = +prompt("Ingrese el año");

if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0)) {
  console.log("el año es bisiesto");
} else {
  console.log("el año no bisiesto");
}