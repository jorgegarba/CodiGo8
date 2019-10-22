import { comentarios } from './data.js';


/**
 * Función que busca en el arreglo de comentarios
 * el comentario que tenga el id entregado y retorna
 * todo el objeto comentario, si no encuentra el id
 * retorna un objeto de forma:
 * {
 *  error: "No se encontró el comentario"
 * }
 * @param {number} id
 * @returns objComentario
 */
let searchCommentById = (id) => {
  // solución con FOR
  ///////////// for (let i = 0; i < comentarios.length; i++) {
  /////////////   if (id == comentarios[i].id) {
  /////////////     return comentarios[i];
  /////////////   }
  ///////////// }
  ///////////
  ///////////// let rpta = {
  /////////////   error: "No se encontró el comentario"
  ///////////// }
  ///////////
  ///////////// return rpta;
  // solución con FIND
  let rpta = comentarios.find((comment) => {
    return comment.id == id;
  });

  // typeof => obtiene el tipo de dato de un elemento
  if (typeof rpta == 'undefined') {
    // significa que no se encontró el comentario
    let mensaje = { error: 'No se encontró el comentario' }
    return mensaje;
  } else {
    return rpta;
  }
}

console.log(searchCommentById(6));
