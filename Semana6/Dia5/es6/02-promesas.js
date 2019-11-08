
let buscarPersonaPorNombre = (nombre) => {
  // creando una promesa (configuracion)
  return new Promise((resolve, reject) => {
    // HACER UN PROCESO ASINCRONO
    setTimeout(() => {
      resolve("Éxito!");
    }, 1500);
  });
}

// Consumiendo una promesa
buscarPersonaPorNombre("Juan").then((mensaje) => {
  console.log(mensaje);
  console.log("La promesa se resolvio");
}).catch(() => {
  console.log("La promesa tuvo un error");
});

