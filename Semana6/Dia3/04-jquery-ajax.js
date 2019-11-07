class CRUDProductos {
  endpoint = "https://5dc194f36ca10a0014d5d95d.mockapi.io";
  getRecursos(callback) {
    $.ajax({
      type: 'GET',
      url: this.endpoint + "/producto",
      timeout: 2000,
      data: null,
      success: function (respuesta) {
        // equivale a un readyState 4
        // la data ya llegó en el objeto respuesta
        // console.log(respuesta);
        callback(respuesta);
        $("#articleLoading").attr("hidden", "hidden");
        $("#articleTabla").removeAttr("hidden");
      },
      error: function (error) {
        console.log(error);
      },
      beforeSend: function () {
        // Aquí podriamos configurar un GIF de carga
        $("#articleLoading").removeAttr("hidden");
        $("#articleTabla").attr("hidden", "hidden");
      },
    })
  }

  /**
   * Función que eliminar un recurso de la BD
   * @param {*} idProducto 
   * @param {*} callback => función callback que se ejecuta
   * cuando un producto se ha eliminado correctamente
   */
  deleteRecursoById(idProducto, callback) {
    let rpta = confirm("¿Está seguro de eliminar el recurso?");
    if (rpta) {
      $.ajax({
        type: 'DELETE',
        url: this.endpoint + "/producto/" + idProducto,
        timeout: 2000,
        data: null,
        success: function (respuesta) {
          // equivale a un readyState 4
          // la data ya llegó en el objeto respuesta
          // console.log(respuesta);
          console.log(respuesta);
          callback();

        },
        error: function (error) {
          console.log(error);
        },
        beforeSend: function () {
          // Aquí podriamos configurar un GIF de carga
        },
      })
    }
  }

  /**
   * Función que crea un recurso
   * @param {*} objProducto => un objeto con todos los campos de un 
   * recurso para enviarlo al servidor
   * @param {*} callback => Función que será ejecutada en la función
   * success de AJAX cuando termine de crearse un recurso
   */
  postRecurso(objProducto, callback) {

  }
}

class Utils {

  cuerpoTabla;

  constructor() {
    this.cuerpoTabla = $("#cuerpoTabla");
  }

  dibujarTabla(productos) {
    // borrando el contenido del cuerpo de la tabla
    this.cuerpoTabla.html("");
    productos.forEach((producto, i) => {
      let tr = $(`<tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.codigo}</td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.precio}</td>
                    <td>
                      <img src="${producto.imagen}"
                            class="rounded-circle"
                            width="100"/>
                    </td>
                  </tr>`);
      let tdAcciones = $("<td></td>");
      let btnAcciones = $(`<button class="btn btn-danger">
                            <i class="fas fa-trash"></i>
                              Eliminar
                          </button>`);
      // configurar el evento Click del boton
      this.configurarBotonEliminar(btnAcciones, producto.id);

      tdAcciones.append(btnAcciones);
      tr.append(tdAcciones);
      this.cuerpoTabla.append(tr);

    })
  }

  configurarBotonEliminar(boton, idProducto) {
    boton.click(() => {
      let objCRUD = new CRUDProductos();
      objCRUD.deleteRecursoById(idProducto, () => {
        // si éste callback se ejecuta, significa que 
        // el producto se ha eliminado
        objCRUD.getRecursos((productos) => {
          this.dibujarTabla(productos);
        })
      });
    });
  }

}



let objUtils = new Utils();
let objCRUD = new CRUDProductos();

$("#btnTraerDatos").click(() => {
  objCRUD.getRecursos((productos) => {
    objUtils.dibujarTabla(productos);
  });
})

$("#btnCrearRecurso").click(() => {
  // Hacer aparecer el formulario de creación de un recurso
  // y ocutlar todos los demás ARTICLES
  
})








// let postRecurso = () => {

//   // Cómo obtener el value de un input
//   // $("#inputEmail").val();
//   // Cómo se settea el value de un input
//   // $("#inputEmail").val('el valor del input');

//   $.ajax({
//     type: 'POST',
//     url: 'SU URL EN MOCKAPI',
//     timeout: 4000,
//     data: /*AQUI SE MANDA UN JSON en string ( stringify) */,
//     contentType: 'application/json',
//     success: function (respuesta) {
//       // equivale a un readyState 4
//       // la data ya llegó en el objeto respuesta
//       console.log(respuesta);
//     },
//     error: function (error) {
//       console.log(error);
//     },
//     beforeSend: function () {
//       // Aquí podriamos configurar un GIF de carga
//     }
//   })

// }