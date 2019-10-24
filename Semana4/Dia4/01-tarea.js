// Crear una tabla de n elementos ingresados por prompt, 
// cada fila tendra los campos:
// Nro. (numeracion automatica)
// Cantidad (ingresada por el usuario)
// Descripcion (Ingresado por el usuario)
// P. Unitario (Ingresado por el usuario)
// P. Total (Calculado por el sistema)
// Disgregar su IGV  (18% de la valor total)
// Al final de la tabla mostrar el total de la compra
// y luego un parrafo que indique si es mayo de 50 soles puede pagar en efectivo o con tarjeta
// y si es menor de 50 soles, solo puede pagar con efectivo.

let nroElementos = +prompt("Ingrese la cantidad de elementos");
// creando la tabla
let tabla = document.createElement("table");
tabla.innerHTML = `<thead>
                    <tr>
                      <th>Nro</th>
                      <th>Cantidad</th>
                      <th>Descripcion</th>
                      <th>P. Unitario</th>
                      <th>Total</th>
                    </tr>
                  </thead>`;

let tbody = document.createElement("tbody");
let contenido = "";
let sumatoria = 0;
for (let i = 0; i < nroElementos; i++) {
  let cantTmp = +prompt(`Ingresa la cantidad del producto ${i + 1}`);
  let descTmp = prompt(`Ingresa la descripción del producto ${i + 1}`);
  let puniTmp = +prompt(`Ingresa el precio unitario del producto ${i + 1}`);
  let total = cantTmp * puniTmp;

  contenido = contenido + `<tr> 
                              <td>${i + 1}</td> 
                              <td>${cantTmp}</td> 
                              <td>${descTmp}</td> 
                              <td>${puniTmp}</td> 
                              <td>${total}</td> 
                            </tr>`;
  sumatoria = sumatoria + total;
}

contenido = contenido + `<tr>
                            <td colspan="4">TOTAL</td>
                            <td>S/. ${sumatoria}</>
                        </tr>
                        <tr>
                            <td colspan="4">IGV</td>
                            <td>S/. ${sumatoria * 0.18}</>
                        </tr>`;




tbody.innerHTML = contenido;





tabla.appendChild(tbody);

tabla.border = "1";

let body = document.getElementById("miBody");
body.prepend(tabla);
