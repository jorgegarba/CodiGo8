// eventos son funciones que se desencadenan
// cuando un elemento es afectado por una acción:
// Esta acción puede ser por ejemplo:
/**
 * Click, el mouse encima, cuando el mouse se mueve en el elemento
 * etc etc etc
 */

let btnTema = document.getElementById("btnTema");

// FORMAS DE ASIGNAR UN EVENTOS
/**
 * FORMA 1: Mediante la función addEventListener
 * addEventListener("evento",funcion anonima)
 */

// btnTema.addEventListener('click', () => {
//   console.log("me hicieron click!");
// });

/**
 * FORMA 2: Mediante la propiedad del elemento
 * como evento
 * elemento.evento = funcion;
 * NOTA: a todos los eventos como propiedad se 
 * le agrega el prefijo 'on'
 * por ejemplo elemento.onclick
 */


// let hacerClick = () => {
//   console.log("me hicieron click ");
// }

btnTema.onclick = () => {
  let link = document.getElementById("estilos");
  // getAttribute("atributo")
  // obtiene el valor del atributo de un elemento

  // setAttribute("atributo","valor")
  // coloca el valor otorgado al atributo del elemento
  if (link.getAttribute("href") == "./03-eventos-tema1.css") {
    link.setAttribute("href", "./03-eventos-tema2.css")
  } else {
    link.setAttribute("href", "./03-eventos-tema1.css")
  }
};




console.log(document.querySelectorAll("table input"));
