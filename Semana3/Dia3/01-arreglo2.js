let temporadas = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10, 11]
];

// console.log(temporadas[1][1]);
// console.log(temporadas[0][1]);

for (let i = 0; i < temporadas.length; i++) {

  for (let j = 0; j < temporadas[i].length; j++) {

    console.log(temporadas[i][j]);

  }

}


// ////////////////////////
// EJERCICIO, dada una matriz cuadrada,
// determinar si la diagonal principal 
// contiene el mismo elemento

let matrizCuadrada = [
  [0, 2, 3, 4],
  [5, 0, 7, 8],
  [9, 10, 0, 12],
  [13, 14, 15, 8]
];
let rpta = true;
let pe = matrizCuadrada[0][0];

for (let i = 0; i < matrizCuadrada.length; i++) {
  if (pe != matrizCuadrada[i][i]) {
    rpta = false;
    break;
  }
}

if (rpta == true) {
  console.log("La matriz si es correcta");
} else {
  console.log("La matriz en incorrecta");
}










// ////////////////////
// dadas 2 matrices de MxN, hallar la suma de sus elementos
// en una 3ra matriz
let m1 = [
  [1, 2, 3],
  [9, 8, 4]
];

let m2 = [
  [10, 2, 12],
  [0, 1, 2]
];

let m3 = [[], []];

for (let i = 0; i < m1.length; i++) {
  for (let j = 0; j < m1[i].length; j++) {
    m3[i][j] = m1[i][j] + m2[i][j];
  }
}

console.log(m3);