// El simbolo o el objeto que representa a JQuery es $

$(document).ready(function () {

  // Selectores al estilo CSS
  let btnCambiarValor = $("#btnCambiarColor");

  // Eventos a los elementos
  // Los eventos van sin el prefijo 'on'
  // ejemplo: onclick => click
  btnCambiarValor.click(function (event) {
    // imprimiendo el evento
    // console.log(event);
    // addClass, agrega una clase al elemento de tipo JQuery
    // $("#headerAccion").addClass("bg-dark text-white");
    if ($(".card-header").hasClass("bg-dark")) {
      $(".card-header").removeClass("bg-dark text-white");
    } else {
      $(".card-header").addClass("bg-dark text-white");
    }
    ////////EQUIVALENCIA CON JS///////////////
    // document.querySelectorAll(".card-header").forEach(e => {
    //   e.classList.add("bg-dark");
    //   e.classList.add("text-white");
    // });

  });


  $("#btnAgregarParrafo").click(() => {
    // Creando Elementos con JQuery
    // creando un parrafo
    let parrafo = $("<p></p>");
    // elemento.html() =>  elemento.innerHTML
    parrafo.html("Texto de prueba del parrafo 1");
    // elemento.append() => appendChild()
    // seleccionando el segundo elemento que tenga
    // la clase "card-body"
    $(".card-body:eq(1)").append(parrafo);
  });

  $("#btnModificarCss").click(function () {
    // modificando estilos CSS
    // elemento.css("clave","valor")
    $(".cuadrado").css("border-radius", "50%")
      .css("border", "2px solid #6699ff");
  });

  $("#btnToggleClass").click(function () {
    // this => selecciona o se refiere al elemento
    // en que estoy modificando la funcion actual, en este 
    // caso, al botón
    $(this).toggleClass("btn-lg");
  });

  $("#btnDisable").click(function () {
    // attr("atirbuto","valor") => setAttribute
    // attr("atributo") => getAttribute
    $("#inputBuscar").attr("disabled", "disabled");
  })

  // find("selector") => obtener los hijos que conincidan
  // con el selector a partir de un elemento

  let botonesDelPrimerCard = $(".card:eq(0)").find("button");
  console.log(botonesDelPrimerCard);
  // ----------------------
  console.log($(".card:eq(0) button"));
  

});