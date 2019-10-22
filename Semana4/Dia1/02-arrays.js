// inicializando un array
let numeros = new Array();
console.log(numeros);

// propiedades de los arrays
// push(elemento(s)) => recibe un elemento y lo inserta
// al final de un array
numeros.push(5, 6, 7, 8, 9)
console.log(numeros);
// pop() => extrae el último elemento de un array
// y modifica el array original
console.log(numeros.pop());
console.log(numeros);

// concat(arreglo) => devuelve la 
// concatenación del arreglo actual con
// el arreglo recibido en la función
// OJO el arreglo original, no se modifica

console.log(numeros.concat([1, 2, 3, 4]));
console.log(numeros);

// splice(posicion, nroElementos, ?valoresAInyectar)
// Elimina 'nroElementos' desde la 'posicion' dada
// y devuelve un arreglo de elementos eliminados
// OJO el arreglo original SI es modificado
// si se envía el parámetro valoresAInyectar(que puede ser
// mas de un valor), inyecta esos valores en la 'posicion' 
// indicada

console.log(numeros.splice(2, 1));
console.log(numeros);

// indexOf // mismo comportamiento que la función de los strings

// =================================================
// filter(funcion) => retorna un arreglo de elementos
// que cumplan con cierta condición
// deficinoin2 => retorna el elemento de la iteracion
// en la que cumpla la condicion

let notas = [10, 11, 14, 20, 5, 8, 20, 14];

// let notasPares = notas.filter((elemento, i) => { return elemento % 2 == 0 });
// let notasPares = notas.filter((elemento, i) => (elemento % 2 == 0));
let notasPares = notas.filter((elemento, i) => {
  if (elemento % 2 == 0) {
    return elemento;
  }
});


console.log(notasPares);

// forEach(()=>{}) función que itera el arreglo de items
// y recibe un callback() al cual envía hasta 3 parámetros
// (elemento, indice, arregloCompleto)
// OJO no retorna valores

notas.forEach((elemento, i) => {
  console.log(`Posicion => ${i}`);
  console.log(`Elemento => ${elemento}`);
});


// map(()=>{}) funcion para aplicar una formula a cada elemento
// del arreglo y 'retornar' un nuevo arreglo con los elementos 
// modificados

let dobles = notas.map((elemento, i) => {
  return elemento * 2;
});

console.log(dobles);


