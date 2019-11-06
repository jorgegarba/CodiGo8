let ruta = document.location.href;

if (ruta.indexOf("post") >= 0) {
  console.log("Estoy en POST");

  let inputPostTitulo = document.getElementById("inputPostTitulo");
  let inputPostBody = document.getElementById("inputPostBody");
  let selectUserId = document.getElementById("selectUserId");
  let btnSubmit = document.getElementById("btnSubmit");

  btnSubmit.onclick = (event) => {

    event.preventDefault();

    // PASO 1 > Armar el JSON para enviar al servidor
    let objPublicacion = {
      title: inputPostTitulo.value,
      body: inputPostBody.value,
      userId: selectUserId.value
    };

    let ajax = new XMLHttpRequest();
    // Establecer el tiempo de espera al servidor
    ajax.timeout = 2000;
    // ontimeout => Función que se ejecuta cuando el servidor
    // no responde en el tiempo establecido
    ajax.ontimeout = () => {
      Swal.fire({
        icon: 'error',
        title: 'Ups!',
        text: 'El servidor no responde'
      })
    }

    // configurando el evento para cuando llegue la 
    // respuesta
    ajax.onreadystatechange = () => {
      if (ajax.readyState == 4) {
        // llegó la data
        console.log(ajax.responseText);
        // imprimiendo el codigo de estado
        console.log(ajax.status);
        // LANZAR ALERTA
        Swal.fire({
          icon: 'success',
          title: 'Usuario Creado',
          text: 'Usuario creado correctamente'
        })
      }
    }
    // configurar el método y la URL
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts");
    // establecer los headers o el tipo de contenido 
    // que se enviará al servidor
    ajax.setRequestHeader("Content-type", "application/json");
    // configurar los datos a enviar al servidor
    ajax.send(JSON.stringify(objPublicacion));
  }


}

if (ruta.indexOf("get") >= 0) {
  console.log("Estoy en GET");
  let btnTraerDatos = document.getElementById("btnTraerDatos");
  let tbody = document.getElementById("tbody");

  let tabla = document.getElementById("tabla");
  let loading = document.getElementById("loading");


  /**
   * Función que dibuja una tabla en la seción de RESULTADOS
   * en HTML
   * @param {Array:string} usuarios la lista de objetos de tipo usuario
   * que llega del servidor 
   */
  let dibujarTabla = (usuarios) => {

    // limpiando el cuerpo de la tabla, por si ya habían
    // filas previamente
    tbody.innerHTML = "";

    // recorrer el arreglo
    // dibujar la tabla para cada usuario con un ciclo for
    // etc etc etc
    // SOLO LOS CAMPOS
    // email: 
    // id: 
    // name: 
    // phone:
    // username: 
    // website:
    usuarios.forEach((usu) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${usu.id}</td>
                    <td>${usu.name}</td>
                    <td>${usu.email}</td>
                    <td>${usu.phone}</td>
                    <td>${usu.username}</td>
                    <td>${usu.website}</td>`;
      tbody.appendChild(tr);
    })

  }

  btnTraerDatos.onclick = () => {

    // a penas hago click al boton, me aseguro de que 
    // la carga aparezca, y se oculte la tabla
    loading.removeAttribute("hidden");
    tabla.setAttribute("hidden", "hidden");

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
          // console.log(postman.responseText);
          // jsonRpta => La misma respuesta del servidor
          // pero en formato JSON (en un objeto JSON)
          let jsonRpta = JSON.parse(postman.responseText);
          // console.log(jsonRpta);
          dibujarTabla(jsonRpta);
          // luego de dibujar la tabla
          // me aseguro de ocultar la carga, y 
          // mostrar la tabla
          tabla.removeAttribute("hidden");
          loading.setAttribute("hidden", "hidden");
          break;
      }
    }

    // onprogress => función que se ejecuta tantas veces
    // como bytes tenga la data de respuesta del servidor
    postman.onprogress = (evento) => {
      console.log(evento);
      // preguntando si el evento o la data del evento
      // es medible
      if (evento.lengthComputable) {
        console.log("si es medible");

        let progreso = (evento.loaded / evento.total) * 100;
        console.log(progreso);
      }
    }


    // Configurando el método y la URL
    postman.open("GET", "https://jsonplaceholder.typicode.com/users");

    // ¿Cómo configurar los HEADERS?
    // postman.setRequestHeader("content-type", "application/json");

    // La función send() hace 2 acciones
    // 1.- Establece e body o el contenido que va a enviar al servidor
    // 2.- Dispara la petición HTTP
    postman.send(null);

  }

}