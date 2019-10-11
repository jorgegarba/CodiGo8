// INICIO
// declarando variables
var DE;
var PF;
// Se lee el costo del traje a comprar
var CT = +prompt("Ingrese el precio del traje");
// Se compara si el costo del traje es 
// mayor a 2500
if (CT > 2500) {
  //  De ser verdadero, se calcula el descuento
  // aplicando 15 %.
  DE = CT * 0.15;
} else {
  // De ser falso, se calcula el descuento
  // aplicando 8%.
  DE = CT * 0.08;
}
// Se obtiene el precio final descontando el descuento
// del precio inicial.
PF = CT - DE;
// Se escribe el precio final y el descuento.
console.log(`Precio final S/.${PF}`);
console.log(`Descuento S/.${DE}`);

