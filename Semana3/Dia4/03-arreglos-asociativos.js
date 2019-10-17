let productos = [];

let n = +prompt("¿Cuántos productos quiere ingresar chamo?");

for (let i = 0; i < n; i++) {
  let productoTmp = [];

  let nombre = prompt(`Ingres el nombre del producto ${i + 1}`);
  let codigo = prompt(`Ingres el codigo del producto ${i + 1}`);
  let precio = prompt(`Ingres el precio del producto ${i + 1}`);


  productoTmp["nombre"] = nombre;
  productoTmp["codigo"] = codigo;
  productoTmp["precio"] = precio;

  productos.push(productoTmp);
}

console.log(productos);


// funcion que imprime el nombre y precio 
// de los productos del arreglo que recibe por parametros

let imprimirNombres = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]["nombre"] + " => " + arreglo[i]["precio"]);
  }
}

imprimirNombres(productos);
