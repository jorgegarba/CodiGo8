var X1 = +prompt("Introduzca X1");
var Y1 = +prompt("Introduzca Y1");

var X2 = +prompt("Introduzca X2");
var Y2 = +prompt("Introduzca Y2");

var X = X2 - X1;
var Y = Y2 - Y1;

var D = Math.sqrt(X * X + Y * Y);
console.log(`Distancia entre los puntos`);
console.log(D);