import { firebaseConfig } from './env/config.js';

// INICIALIZAR FIREBASE
firebase.initializeApp(firebaseConfig);
// Instanciar la base de datos
let database = firebase.database();
let updateCancha = (objCancha) => {

}
let postCancha = (objCancha) => {

  // Obtener una llave única para el nodo canchas
  let key = database.ref("canchas").push().key;
  // inyectar el objeto en el nodo canchas/key
  database.ref("canchas").child(key)
    .set(objCancha)
    .then(() => {
      Swal.fire({
        title: 'Creado!',
        text: 'Canchita creada correctamente',
        icon: 'success'
      });
      $("#modalCrearCancha").modal("hide");
      document.getElementById("frmCrearCancha").reset();
    })
    .catch(() => {
      Swal.fire({
        title: 'Ups!',
        text: 'Se ha producido un error en el servidorsh',
        icon: 'error'
      })
    })
}


// SCRIPT PARA CANCHAS.HTML
if (document.location.href.indexOf("canchas.html") != -1) {

  // ESTOY EN LA PAGINA CANCHAS. HTML
  $("#btnAbrirModal").click(function () {
    // mostrar modal cuando se hace click en el botón circular
    $("#modalCrearCancha").modal("show");
  })

  $("#frmCrearCancha").submit(function (event) {
    event.preventDefault();
    console.log("submit!!!");

    // Armar el objeto JSON
    let objCancha = {
      nombre: $("#inputNombre").val(),
      direccion: $("#inputDireccion").val(),
      lat: $("#inputLatitud").val(),
      lng: $("#inputLongitud").val(),
      nrocanchas: $("#inputNroCanchas").val(),
      telefono: $("#inputTelefono").val()
    }

    postCancha(objCancha);

  })
  // $("#frmEditarCancha").submit(function (event) {
  //   let objCancha = {
  //     nombre: $("#EditinputNombre").val(),
  //     direccion: $("#EditinputDireccion").val(),
  //     lat: $("#EditinputLatitud").val(),
  //     lng: $("#EditinputLongitud").val(),
  //     nrocanchas: $("#EditinputNroCanchas").val(),
  //     telefono: $("#EditinputTelefono").val()
  //   }
  //   event.preventDefault();
  //   console.log("SE EJECUTO EL FORM SUBMIT");
  // })
  $("#btnEditarCancha").click(function (event) {
    event.preventDefault();
    console.log("SE EJECUTO EL EDITAR SUBMIT");
  })
  $("#btnEliminarCancha").click(function (event) {
    event.preventDefault();
    console.log("SE EJECUTO EL ELIMINAR SUBMIT");
  })


  let dibujarTabla = (arregloCanchas) => {
    var tabla = $("#tablaCanchas").DataTable({
      data: arregloCanchas,
      // destroy, sirve para reinicializar el datatable cada vez
      // que se llame a la función nuevamente
      destroy: true,
      columns: [
        { title: "Id", data: 'id' },
        { title: "Nombre", data: 'nombre' },
        { title: "Dirección", data: 'direccion' },
        { title: "Nro lozas", data: 'nrocanchas' },
        { title: "Lat", data: 'lat' },
        { title: "Long", data: 'lng' },
        { title: "Teléfono", data: 'telefono' },
        { title: "Acciones", defaultContent: '<button class="btn btn-secondary">Acciones</button>' }
      ]
    });
    // console.log(tabla.rows().data());
    // document.getElementById("tablaCanchas").addEventListener("click",()=>{})
    $("#tablaCanchas").on('click', 'button', function () {
      var data = tabla.row($(this).parents('tr')).data();
      console.log(data);
      $("#idCancha").text(data.id);
      $("#modalEditarCancha").modal("show");
      $("#EditinputNombre").val(data.nombre);
      $("#EditinputDireccion").val(data.direccion);
      $("#EditinputNroCanchas").val(data.nrocanchas);
      $("#EditinputTelefono").val(data.telefono);
      $("#EditinputLatitud").val(data.lat);
      $("#EditinputLongitud").val(data.lng);

    })
  }

  let traerDatos = () => {
    // =======
    // ======= Con la función ONCE => Que solo trae la data una vez
    // =======
    // database.ref("canchas").once('value').then((dataSnapshot) => {
    //   let arregloCanchas = [];
    //   dataSnapshot.forEach((cancha) => {
    //     arregloCanchas.push({
    //       ...cancha.val(),
    //       id: cancha.key
    //     })
    //   });
    //   dibujarTabla(arregloCanchas);
    // })
    // =======
    // Con la función ON => Que escucha cualquier evento de cambio en 
    // la BD
    // =======
    database.ref("canchas").on('value', (dataSnapshot) => {
      let arregloCanchas = [];
      dataSnapshot.forEach((cancha) => {
        arregloCanchas.push({
          ...cancha.val(),
          id: cancha.key
        })
      });
      dibujarTabla(arregloCanchas);
    })
  }

  traerDatos();

}






