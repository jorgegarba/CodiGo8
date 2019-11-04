let btnTraerDatos = document.getElementById("btnTraerDatos");


btnTraerDatos.onclick = () => {
  // Creando un objeto ajax
  let postman = new XMLHttpRequest();

  // OJO: Antes de disparar la petición HTTP, 
  // se deben configurar los estados por los cuales pasa nuestra
  // variable AJAX o postman(en este caso)


  // onreadystatechange => función que se ejecuta
  // cada vez que cambia el estado del
  // objeto AJAX
  postman.onreadystatechange = () => {
    // readyState => atributo del objeto AJAX
    // que cambia cada vez que cambia el estado del
    // objeto AJAX
    switch (postman.readyState) {
      case 1:
        console.log("se llamó a OPEN");
        break;
      case 2:
        console.log("se llamó a SEND");

        break;
      case 3:
        console.log("Esperando respuesta del servidor");
        break;
      case 4:
        console.log("La data ya está aquí");
        // responseText => El cuerpo de lo que responde el servidor
        // si fuera un JSON, es un JSON en formato STRING
        console.log(postman.responseText);
        // jsonRpta => La misma respuesta del servidor
        // pero en formato JSON (en un objeto JSON)
        let jsonRpta = JSON.parse(postman.responseText);
        console.log(jsonRpta);
        break;
    }
  }


  // Configurando el método y la URL
  postman.open("GET", "https://jsonplaceholder.typicode.com/users");

  // La función send() hace 2 acciones
  // 1.- Establece e body o el contenido que va a enviar al servidor
  // 2.- Dispara la petición HTTP
  postman.send(null);

}