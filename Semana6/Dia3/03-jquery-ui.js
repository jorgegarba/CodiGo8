$(".cuadrado").draggable();
$("#contenido").draggable();


$("#contenedor").droppable(
  {
    // drop => evento que se dispara cuando un elemento
    // es soltado en el área del contenedor
    drop: function (event, ui) {

      // ui => el elemento que llega al contenedor
      console.log(ui.draggable[0]);
      console.log("UF! soltaron un elementillo");
    }
  }
);