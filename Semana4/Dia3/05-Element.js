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


// Caputar el elemento donde vamos a insertar la tabla
var seccion = document.getElementById("miSeccion");
// Pidiendo n elementos que va a tener mi boleta
var n = +prompt("Ingrese la cantidad de elementos");
// Creamos la tabla
var tabla = document.createElement("table");
// Creamos la cabecera
var cabeceraTexto = ["Nro","Cantidad","Descripcion","P. Unitario","Total"]
var cabecera = document.createElement("tr")

// MODO PRO
for (let index = 0; index < cabeceraTexto.length; index++) {
    // Crear las columnas para la cabecera
    var th = document.createElement("th");
    // Asignamos el texto a esa cabecera
    th.innerHTML=cabeceraTexto[index];
    // Inserta las columas a la cabecera
    cabecera.appendChild(th);
}
console.log(cabecera);

// MODO BEGINNER
// Crear las columnas para la cabecera
// var thNro = document.createElement("th");
// thNro.innerHTML="Nro."
// var thCant = document.createElement("th");
// thCant.innerHTML="Cantidad"
// var thDesc = document.createElement("th");
// thDesc.innerHTML="Descripcion"
// var thPreUni = document.createElement("th");
// thPreUni.innerHTML="P. Unitario"
// var thTotal = document.createElement("th");
// thTotal.innerHTML="Total"

// Inserta las columas a la cabecera
// cabecera.appendChild(thNro);
// cabecera.appendChild(thCant);
// cabecera.appendChild(thDesc);
// cabecera.appendChild(thPreUni);
// cabecera.appendChild(thTotal);

// Insertar la cabecera a la tabla
tabla.appendChild(cabecera);
// Insertamos la tabla a la seccion
seccion.appendChild(tabla);
tabla.border=1;

var pfinal = 50;
var parrafo = document.createElement("p");

if(pfinal<50){
    parrafo.innerHTML="SOLO PUEDE PAGAR EN EFECTIVO"
}else{
    parrafo.innerHTML="PUEDE PAGAR EN EFECTIVO O CON TARJETA"
}
seccion.appendChild(parrafo)