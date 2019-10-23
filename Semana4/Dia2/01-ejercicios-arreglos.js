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

/**
 * Función que retorna un arreglo
 * con todos los elementos cuyo correo(email)
 * termina en '.biz'
 * @returns arreglo de objetos que terminan en '.biz'
 */
let getAllBiz = () => {
  let resultado = comentarios.filter((comment) => {
    return comment.email.endsWith(".biz");
  });

  return resultado;
}

console.log(getAllBiz());



/**
 * Función que retorna un arreglo de objectos 
 * con el 'email' y el 'name'
 * de los registros cuyo 'body' contenga la palabra buscada
 * en la variable word 
 * @param {string} word la palabra buscada dentro del campo body
 */
let getNameEmailByWordInBody = (word) => {
  // creando un arrelgo vacio de resultados
  let resultado = [];
  // iterando el arreglo de comentarios
  comentarios.forEach((elemento) => {
    // preguntar si el texto de la variable 'word', existe 
    // en alguna posición del campo 'body'
    if (elemento.body.indexOf(word) != -1) {
      // si el elemento contiene la palabra buscada/
      // creo un objecto temporal con la copia de los 2 campos
      // requeridos solamente
      let objTmp = {
        email: elemento.email,
        name: elemento.name
      };
      // agrego ese objeto temporal al arreglo resultado
      resultado.push(objTmp);
    }
  });
  // terminado el ciclo foreach retorno el arreglo resultado
  return resultado;
}


console.log(getNameEmailByWordInBody('libero'));



/**
 * Función que retorna un arreglo de objetos de tipo album
 * dado el id del usuario al que le pertenecen, además deberá
 * imprimirse los datos personales del usuario antes de retornar
 * el arreglo
 * HINT: Deberán usar el arreglo de users y el arreglo de albumes
 * @param {number} userId id del usuario
 * 
 */
let getAlbumesByUsuarioId = (userId) => {

}

/**
 * Funcion que devuelve un arreglo de las tareas completadas de un 
 * usuario dado el id del usuario
 * Las tareas completadas son las tareas que en el campo 'completed'
 * tengan valor 'TRUE',  además deberá
 * imprimirse los datos personales del usuario antes de retornar
 * el arreglo
 * HINT: Deberán usar el arreglo de users y el arreglo de tareas
 * @param {number} userId id del usuario
 */
let getCompletedTasksByUserId = (userId) => { 

}