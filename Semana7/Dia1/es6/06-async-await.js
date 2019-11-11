/**
 * async => transforma una función normal, en una promesa
 * return => Equivale a la función {resolve} en una promesa
 * throw => Equivale a la función {catch} en una promesa
 */
let buscarCiudad = async (nombre) => {
  if (nombre === "Puno,pe") {
    return "Correcto, se recibió Puno"
  } else {
    throw "No se reicibió Puno"
  }
}

buscarCiudad("Puno,pe").then(rpta => {
  console.log("then");
  console.log(rpta);
}).catch(error => {
  console.log("catch");
  console.log(error)
})


//  ================================= //

let consultarAPI = async (numero) => {
  switch (numero) {
    case 1:
      return "uno"
    case 2:
      return "dos"
    case 3:
      return "tres"
    default:
      throw "error!"
  }
}

let devolverMAYUSCULAS = async (palabra) => {
  return palabra.toUpperCase();
}

let consumirAPIS = async () => {
  let x = await consultarAPI(2);
  let mayus = await devolverMAYUSCULAS(x);
  return mayus;
}

consumirAPIS().then(rpta => {
  console.log(rpta);
})


