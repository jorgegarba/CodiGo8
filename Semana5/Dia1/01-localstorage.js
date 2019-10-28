// onload => se ejecuta automáticamente, depués de que todos los recursos
// o elementos internos, se hayan cargado por completo.
window.onload = function () {
  console.log("los elementos internos de window se han cargado");
  let miBoton = document.getElementById("miBoton");
  miBoton.innerText = "Guardar Storage";
  miBoton.onclick = () => {
    // guardar un elemento en el localstorage
    // setItem(clave,valor)
    // Todo elemento guardado en el localStorage es un string
    localStorage.setItem('color', "#669011");
  }
  /**
   * Función que verifica si existe la clave 'color'
   * en el localStorage, si existe, cambia el color de fondo 
   * con el valor dicha clave, si no, se queda con el color de
   * fondo por default
   */
  let verificarStorage = () => {
    // getItem('clave') => función que obtiene el valor de una clave
    //guardada en el localStorage
    let color = localStorage.getItem('color');
    // evaluar si existe el valor de la clave color
    if (color) {
      // sí existe
      console.log(color);
      let body = document.getElementById("miBody");
      body.style.backgroundColor = color;

    } else {
      console.log("No existe la clave color");
    }
  }
  verificarStorage();

  let inputNombre = document.getElementById("inputNombre");
  let inputApellido = document.getElementById("inputApellido");
  let inputColor = document.getElementById("inputColor");
  let botonGuardar = document.getElementById("botonGuardar");

  botonGuardar.onclick = (event) => {
    event.preventDefault();

    localStorage.setItem("nombre", inputNombre.value);
    localStorage.setItem("apellido", inputApellido.value);
    localStorage.setItem("colorFavorito", inputColor.value);

  }

  let verificarPreferencias = () => {
    let nombreStorage = localStorage.getItem("nombre");
    let apellidoStorage = localStorage.getItem("apellido");
    let colorFavoritoStorage = localStorage.getItem("colorFavorito");

    if (nombreStorage) {
      inputNombre.value = nombreStorage;
    }
    if (apellidoStorage) {
      inputApellido.value = apellidoStorage;
    }
    if (colorFavoritoStorage) {
      inputColor.value = colorFavoritoStorage;
    }
  }
  
  verificarPreferencias();






}