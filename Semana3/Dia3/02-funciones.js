/**
 * Función que recibe un arreglo de números
 * y retorna un subarreglo de los número pares
 * solamente
 * @param {*} numeros arreglo de números
 */
function getPares(numeros) {
  let rpta = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      rpta.push(numeros[i]);
    }
  }
  return rpta;
}

let arreglo = [1, 2, 4, 2, 76, 77, 0, 1, 44];
let pares = getPares(arreglo);
console.log(pares);


// /////////////////////////////////


/**
 * Función que recibe un arreglo de nombres y un nombre a buscar
 * Si el nombre buscado, se encuentra en el arreglo, la función
 * retorará la posición en la que se encuentre el nombre buscado
 * En caso no se encuentre el nombre, la función retornará -1
 * @param {String[]} nombres Arreglo de nombres
 * @param {String} busqueda El nombre buscado
 * @returns {number} Posición encontrada o -1
 */
function buscarNombre(nombres, busqueda) {

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] == busqueda) {
      return i;
    }
  }
  return -1;
}

let names = ['jorge', 'carlos', 'maria', 'ximena', 'paty'];
let rpta = buscarNombre(names, "pepe");
if (rpta != -1) {
  console.log(`Nombre encontrado en la posición ${rpta}`);
} else {
  console.log(`No se encontró el nombre buscado`);
}


/////////////////////////////////////////
// Se tiene la siguiente estructura
let alumnos = ['Jorge', 'Carlos', 'Ximena'];
let cursos = [['algoritmos', 'poo'], ['algoritmos'],
['algoritmos', 'poo', 'calculo']];
let notas = [[12, 13], [9], [14, 5, 20]];

/**
 * Función que IMPRIME la lista de cursos que un alumno 
 * lleva dado el nombre del alumno
 * @param {String} nombre El nombre del alumno a buscar
 */
function getCursos(nombre) {
  let pos = -1;
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i] == nombre) {
      pos = i;
      break;
    }
  }
  if (pos != -1) {
    console.log(`Los cursos de ${nombre} son:`);
    console.log(cursos[pos]);
  } else {
    console.log(`No hay cursos para esa persona`);
  }
}
getCursos('Ximena');



/**
 * Función que modifica el nombre de un alumno
 * Al final, la función imprime la nueva lista de 
 * alumnos
 * @param {*} nombreAntiguo El nombre alntiguo del alumno
 * @param {*} nuevoNombre El nuevo nombre del alumno
 */
function modificarNombre(nombreAntiguo, nuevoNombre) {

}

