import { firebaseConfig } from './env/config.js';

// INICIALIZAR FIREBASE
firebase.initializeApp(firebaseConfig);
// Instanciar la base de datos
let database = firebase.database();
let storage = firebase.storage();
let updateCancha = (objCancha) => {
  let id = $("#idCancha").text()
  console.log(id);
  database.ref("canchas/"+id).set({
    direccion: objCancha.direccion,
    nombre: objCancha.nombre,
    lat: objCancha.lat,
    lng: objCancha.lng,
    nrocanchas: objCancha.nrocanchas,
    telefono : objCancha.telefono,
    url: objCancha.url
  },function (error){
    if ( error){
      console.log(error);
    }else{
      Swal.fire({
        title:'Ok',
        text:'Se ha actualizado la canchita',
        icon:'success'
      })
      $("#modalEditarCancha").modal("hide");
    }
  });
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
let deleteCancha = (idCancha)=>{
  console.log(idCancha);
  database.ref("canchas/"+idCancha).remove().then(function () {
    console.log("Se elimino la cancha");
  }).catch(function (error) {
    console.log(error);
  })
}

let subirArchivo = (objCancha)=>{
  var storageRef = storage.ref();
  var archivo = $("#inputFoto").prop('files')[0];
  var nombreArchivo = archivo.name;
  var nombreFinal = +(new Date())+'-'+nombreArchivo;
  let metadata = {
    contentType: archivo.type
  }
  storageRef.child("canchitas/"+nombreFinal).put(archivo,metadata)
      .then((respuesta)=>{
    // Nos sirve para obtener la url de descarga de la imagen
    // devuelve otra promesa
    return respuesta.ref.getDownloadURL();
  }).then((url)=>{
    objCancha.url= url;
    postCancha(objCancha);
  }).catch((error)=>{
    console.log(error);
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
    subirArchivo(objCancha)

    // postCancha(objCancha);

  })
  // $("#frmEditarCancha").submit(function (event) {
  //   
  //   event.preventDefault();
  //   console.log("SE EJECUTO EL FORM SUBMIT");
  // })
  $("#btnEditarCancha").click(function (event) {
    let objCancha = {
      nombre: $("#EditinputNombre").val(),
      direccion: $("#EditinputDireccion").val(),
      lat: $("#EditinputLatitud").val(),
      lng: $("#EditinputLongitud").val(),
      nrocanchas: $("#EditinputNroCanchas").val(),
      telefono: $("#EditinputTelefono").val(),
      url:$("#imgCancha").attr("src")
    }
    // event.preventDefault();
    updateCancha(objCancha);
  })
  $("#btnEliminarCancha").click(function (event) {
    event.preventDefault();
    let id = $("#idCancha").text()
    deleteCancha(id);
  })


  let dibujarTabla = (arregloCanchas) => {
    // $("#tablaCanchas").Dataajax.reload();
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
        { title: "Imagen", data: 'url', render:function(data){ return "<img src="+data+">"}},
        { title: "Acciones", defaultContent: '<button class="btn btn-secondary">Acciones</button>',
        render:function(data,type,row,meta){
          $("#tablaCanchas").on('click', 'button', function () {
            // console.log(row);
            // console.log(meta);
            
            // console.log(tabla.row($(this).parents('tr')))
            var data = tabla.row($(this).parents('tr')).data();
            // console.log(data);
            $("#modalEditarCancha").modal("show");
            $("#idCancha").text(data.id);
            $("#EditinputNombre").val(data.nombre);
            $("#EditinputDireccion").val(data.direccion);
            $("#EditinputNroCanchas").val(data.nrocanchas);
            $("#EditinputTelefono").val(data.telefono);
            $("#EditinputLatitud").val(data.lat);
            $("#EditinputLongitud").val(data.lng);
            $("#imgCancha").attr("src",data.url)
      
          })
        } }
      ]
    });
    // document.getElementById("tablaCanchas").addEventListener("click",()=>{})
    
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
      // arregloCanchas.forEach((cancha)=>{
      //   cancha.url="<img src='"+cancha.url+"' alt=''>"
      //   console.log(cancha);
      // })
      

      dibujarTabla(arregloCanchas);
    })
  }

  traerDatos();

}






