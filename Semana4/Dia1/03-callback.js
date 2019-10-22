
let buscarJorge = (nombres, f) => {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] == "Jorge") {
      f(i);
      break;
    }
  }
  f(-1);
}

buscarJorge(["Jorge", "Carlos", "Juan"], (posicion) => {
  if (posicion != -1) {
    console.log("Se encontro a Jorge posicion " + posicion);
  } else {
    console.log("nel");
  }
});