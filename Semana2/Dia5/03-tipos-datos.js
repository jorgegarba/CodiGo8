// datos numéricos (enteros y decimales)
var edad = 28;
var promedio = 17.5;
// cadenas de texto (strings)
var nombre = "Jorge Luis";
var apellido = 'Garnica Blanco';
var numero = "28";
// datos booleanos (verdadero o falso);
var aprobado = false;
var error = true;
// variable sin inicializar
var x;

console.log(edad);
console.log(apellido);
console.log(error);
console.log(numero);
console.log(x);
// concatenando un string con un numérico
var mensaje = "Mi edad es " + edad + " " + aprobado;
var mensaje2 = `Mi edad es ${edad} ${aprobado}`;
console.log(mensaje);
console.log(mensaje2);
console.log(edad + "100");
console.log(`${edad}100`);