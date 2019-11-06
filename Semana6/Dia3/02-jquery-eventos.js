
let sombra = $("<div></div>");
sombra.css("position", "absolute")
  .css("width", "50px")
  .css("height", "50px")
  .css("border-radius", "50%")
  .css("background-color", "transparent")
  .css("box-shadow", "0px 0px 5px #000 inset")
  .css("top", 0)
  .css("left", 0);

$("body").append(sombra);

// calcular total del ancho del #body1
console.log($("#body1").innerWidth());

$("#body1").mousemove(function (e) {
  // values: e.clientX, e.clientY, e.pageX, e.pageY
  // offsetX, offsetY => obtiene las coordenadas en X e Y 
  // respecto del contenedor
  sombra.css("top", `${e.clientY - 25}px`);
  sombra.css("left", `${e.clientX - 25}px`);

  if (e.offsetY >= 730 && e.offsetY <= 800) {

    Swal.fire({
      icon: 'success',
      text: 'Ganaste'
    })
  }

});

// tipos de eventos

// dlbclick
// hover
// focus
// blur
