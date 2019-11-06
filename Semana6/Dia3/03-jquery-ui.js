$(".cuadrado").draggable();
$("#contenido").draggable();


$("#contenedor").resizable();

$("#contenedor").droppable(
  {
    // drop => evento que se dispara cuando un elemento
    // es soltado en el área del contenedor
    drop: function (event, ui) {
      // ui => el elemento que llega al contenedor
      let hijo = ui.draggable[0];
      console.log("UF! soltaron un elementillo");
      console.log(hijo.getAttribute("colorcito"));
    }
  }
);