/**
 * SISTEMA PARA CREAR UN PABELLON DE UN CEMENTERIO
 * - El usuario ingresará la cantidad de filas y columnas
 *   del pabellon.
 * - El usuario ingresará el nombre del pabellón
 * - El usuario ingresará el tipo de numeración
 * 
 * - Cada nicho debe tener centrado el número que le 
 *   corresponde.
 * - Cada nicho mide 70px x 70px
 * - Cada nicho representa a un objeto con los siguientes
 *   campos
 *   - nroNicho
 *   - fila
 *   - columna
 *   - estado(por defecto con el valor 'libre')
 */


let filas = +prompt("Ingrese el número de filas");
let columnas = +prompt("Ingrese el número de columnas");
let nombre = prompt("Ingrese el nombre del pabellon");

let tabla = document.createElement("table");
tabla.innerHTML = `<thead>
                      <tr>
                        <th colspan="${columnas}">
                            ${nombre}
                        </th>
                      </tr>
                  </thead>`



let tbody = document.createElement("tbody");
let nichos = [];

for (let i = 0; i < filas; i++) {

  let filaTmp = document.createElement("tr");

  for (let j = 0; j < columnas; j++) {

    let tdTmp = document.createElement("td");
    tdTmp.innerHTML = (i * columnas) + j + 1;
    tdTmp.classList.add("nicho");
    let objNichoTmp = {
      fila: i + 1,
      columna: j + 1,
      nroNicho: (i * columnas) + j + 1,
      estado: 'libre',
    };
    nichos.push(objNichoTmp);

    filaTmp.appendChild(tdTmp);
  }

  tbody.appendChild(filaTmp);

}

tabla.appendChild(tbody);

let miBody = document.getElementById("miBody");
miBody.prepend(tabla);
