let getRecursos = () => {

  $.ajax({
    type: 'GET',
    url: 'SU URL EN MOCKAPI',
    timeout: 4000,
    data: null,
    success: function (respuesta) {
      // equivale a un readyState 4
      // la data ya llegó en el objeto respuesta
      console.log(respuesta);
    },
    error: function (error) {
      console.log(error);
    },
    beforeSend: function () {
      // Aquí podriamos configurar un GIF de carga
    }
  })

}


let postRecurso = () => {

  // Cómo obtener el value de un input
  // $("#inputEmail").val();
  // Cómo se settea el value de un input
  // $("#inputEmail").val('el valor del input');

  $.ajax({
    type: 'POST',
    url: 'SU URL EN MOCKAPI',
    timeout: 4000,
    data: /*AQUI SE MANDA UN JSON en string ( stringify) */,
    contentType: 'application/json',
    success: function (respuesta) {
      // equivale a un readyState 4
      // la data ya llegó en el objeto respuesta
      console.log(respuesta);
    },
    error: function (error) {
      console.log(error);
    },
    beforeSend: function () {
      // Aquí podriamos configurar un GIF de carga
    }
  })

}