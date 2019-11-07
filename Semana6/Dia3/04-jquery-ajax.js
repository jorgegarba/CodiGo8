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
      tdAcciones.append(btnAcciones);
      tr.append(tdAcciones);
      this.cuerpoTabla.append(tr);
    })
  }

}



let objUtils = new Utils();
let objCRUD = new CRUDProductos();

$("#btnTraerDatos").click(() => {
  objCRUD.getRecursos((productos) => {
    objUtils.dibujarTabla(productos);
  });
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