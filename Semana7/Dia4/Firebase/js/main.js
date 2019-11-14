import { firebaseConfig } from './env/config.js';

// INICIALIZAR FIREBASE
firebase.initializeApp(firebaseConfig);
// Instanciar la base de datos
let database = firebase.database();


let postCancha = (objCancha) => {

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
    console.log(objCancha);
    

  })

}






