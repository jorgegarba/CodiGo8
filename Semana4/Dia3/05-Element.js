var principal = document.getElementById("principal");
// createelement([elemento])=> crea un elemento nuevo en el html PERO no lo coloca
var parrafo = document.createElement("p");
parrafo.innerHTML ="Soy un elemento creado en JavaScript";
parrafo.style.color = "Blue";
// Para agregarlo a nuestro documento HTML, primero debemos indicar donde lo vamos a poner
// una vez que tengamos donde lo queremos usamos el metodo principal.appendChild(parrafo)
// agregar a su nuevo hijo al final de todos sus hijos
principal.appendChild(parrafo);

// Forma de agregar recursivamente elementos al HTML
for(let i=0;i<5;i++){
    let miParrafo = document.createElement("p");
    miParrafo.innerHTML=`Soy el parrafo N° ${i+1} creado en JavaScript`;
    principal.appendChild(miParrafo)
}

// Crear una tabla de n elementos ingresados por prompt, cada fila tendra los campos:
// Nro. (numeracion automatica)
// Cantidad (ingresada por el usuario)
// Descripcion (Ingresado por el usuario)
// P. Unitario (Ingresado por el usuario)
// P. Total (Ingresado por el sistema)
// Disgregar su IGV  (18% de la valor total)
// Al final de la tabla mostrar el total de la compra
// y luego un parrafo que indique si es mayo de 50 soles puede pagar en efectivo o con tarjeta
// y si es menor de 50 soles, solo puede pagar con efectivo.