// Importando variables y funciones con nombres iguales
import { arregloDeNumeros, imprimirSaludo } from './variables';
// Importando un default
import nombres, { correo } from './variables2';
// Importar varias variables en una sola
import * as abc from './variables3';



console.log(arregloDeNumeros);
imprimirSaludo();

console.log(nombres);
console.log(correo);

console.log(abc.a);
console.log(abc.b);
console.log(abc.c);
