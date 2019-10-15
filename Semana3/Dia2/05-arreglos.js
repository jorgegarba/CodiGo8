let notas = [13, 2, 5, 1];
let nombres = ["Jorgito", "Carlitos", "Estrellita", "Paloma"];

console.log(notas);
console.log(nombres);

// propiedades de los arreglos
// arreglo.lenght => Cantidad de elementos q tiene el arreglo

console.log(nombres.length);

// recorriendo un arreglo
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}




// [13, 14, 5, 17];
// algoritmo para ver el alumno con menor nota
// 1. asumo que la nota menor es la primera
let notaMenor = notas[0];
let posicionMenor = 0;

for (let i = 0; i < notas.length; i++) {
  if (notaMenor > notas[i]) {
    notaMenor = notas[i];
    posicionMenor = i;
  }
}

console.log(`La nota menor es: ${notaMenor}`);
console.log(`La posicion del menor es ${nombres[posicionMenor]}`);


// dado un arreglo de numeros, 
// contar la cantidad de positivos, negativos 
// y numeros iguales a cero, 

let numeros = [1, 2, 4, 3, -3, 3, 0, -9, -8, 0, 0, 3, 0];
let cp = 0;
let cn = 0;
let cc = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    cp++;
  } else {
    if (numeros[i] < 0) {
      cn++;
    }
  }
}
console.log(`Total positivos ${cp}`);
console.log(`Total negativos ${cn}`);
console.log(`Total ceros ${numeros.length - cp - cn}`);

