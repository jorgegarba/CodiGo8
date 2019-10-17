
// getMayor 
// que reciba un arreglo
// y que retorne el mayor de sus elementos

let getMayor = (elementos) => {

  let mayor = elementos[0];
  for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] > mayor) {
      mayor = elementos[i];
    }
  }
  return mayor;
}

let arreglo = [3, 8, 1, 0, -8, 90, 5]
let m = getMayor(arreglo);
console.log(m);


// SPREAD OPERATOR

let frutas = (a, b, ...resto) => {

  console.log(a);
  console.log(b);
  console.log(resto);

}

frutas('mango', 'melon', 'papaya', 'pera', 'manzana');



// parametros por defecto

let crearUsuario = (nombre = "sin-nom", apellido = "sin-ape") => {
  console.log(`nombre => ${nombre}`);
  console.log(`apellido => ${apellido}`);
}

crearUsuario();
crearUsuario('Jorge');
crearUsuario('Jorge','Garnica');