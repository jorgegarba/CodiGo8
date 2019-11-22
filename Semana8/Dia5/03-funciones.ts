let retornaSumatoria = (numeros: Array<number>): number => {
  let suma: number = 0;

  for (const numero of numeros) {
    suma += numero;
  }

  return suma;
}

console.log(retornaSumatoria([4, 55, 5]));
// ================ //

let imprimirObjeto = (objeto: Object): void => {
  for (const key in objeto) {
    console.log(`Atributo ${key}, Valor ${objeto[key]}`);
  }
}

let objAuto = {
  color: "Azul",
  modelo: "Picanto",
  marca: "Kia"
}

imprimirObjeto(objAuto);

// ================= //

let convertir = (canchitas: Object): Array<Object> => {

  let arreglo: Array<Object> = [];

  // forma de recorrer un objeto de objetos
  for (const id in canchitas) {
    arreglo.push(
      {
        id,
        ...canchitas[id]
      });
  }

  console.log(arreglo);
  return arreglo;
}

convertir({ "-LtjwrpsdH4frvwsSD_F": { "direccion": "", "lat": "1", "lng": "5", "nombre": "", "nrocanchas": "1", "telefono": "" }, "-Ltjwvd8DBXlj7FfhVLk": { "direccion": "Calle Blondell 105", "lat": "1", "lng": "5", "nombre": "Bola 8", "nrocanchas": "1", "telefono": "974204853" }, "-LtjxVWJCQwDlIMIzaRY": { "direccion": "Dolores", "lat": "4", "lng": "6", "nombre": "Jarawa", "nrocanchas": "4", "telefono": "83948793" }, "-LtjxjTYI9frhgrXrkc6": { "direccion": "slkdfmlskmdflksmd", "lat": "8", "lng": "10", "nombre": "Jarawalskdflsdkflsdkmlskdml", "nrocanchas": "7", "telefono": "83948793" }, "-Ltjy5ZHO21Dta6KYz-w": { "direccion": "slkdfmlskmdflksmdasdas", "lat": "8", "lng": "10", "nombre": "Jarawalskdflsdkflsasdasdasdasdasd", "nrocanchas": "7", "telefono": "83948793" }, "-LtjyuVmi5PibeJj8j4f": { "direccion": "Calle Blondell 105", "lat": "1", "lng": "6", "nombre": "Bola 8", "nrocanchas": "12222", "telefono": "974204853" }, "-LtjzTiHDCt3ZIAj4yGY": { "direccion": "direccion", "lat": "12", "lng": "12", "nombre": "Nombre", "nrocanchas": "3", "telefono": "974204853" }, "-Ltk-Cxv8S8XQW9H7BHu": { "direccion": "Calle Blondell 105", "lat": "4", "lng": "4", "nombre": "Bola 8", "nrocanchas": "6", "telefono": "974204853" }, "-Ltk0JgYiwoCBNOTNj8D": { "direccion": "ppppp", "lat": "4", "lng": "3", "nombre": "pppp", "nrocanchas": "4", "telefono": "974204853" } });
