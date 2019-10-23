// Da la informacion acerca del origen del documento
// Se puede usar como una propiedad para declarar la URL 
// del documento
// window.location = "https://www.google.com"
console.log(window.location);

// Da informacion acerca de donde se esta corriendo la pagina
// web
console.log(window.navigator);
// Document => da acceso a los objetos que representan los
// elementos en el html 
window.document.getElementById("span")

// propiedad que devuelve el ancho de la ventana en pixeles
console.log(window.innerWidth)
// propiedad que devuelve el alto de la ventana en pixeles
console.log(window.innerHeight);
// propiedad que muestra un mensaje de alerta al usuari
window.alert("Esta es una alerta");
// propiedad que pide al usuario ingresar un dato por medio 
// de un cuadro emergente
window.prompt("Ingrese un valor");

// propiedad que sirve para confirmar al usuario de algun suceso
let rpta = window.confirm("Estas seguro que deseas eliminar los cambio?");
console.log(rpta);
// Espera a que pase un tiempo definido en milisegundos para ejecutar una
// accion
window.setTimeout(
    () => {
        console.log("hola");
    }, 1000);

// Que se realiza indeterminadamente despues de un periodo de tiempo
window.setInterval(
    ()=> {
        console.log("Me ejecuto");
    },900
);
