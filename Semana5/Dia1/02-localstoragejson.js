window.onload = () => {

  let inputNombre = document.getElementById("inputNombre");
  let inputApellido = document.getElementById("inputApellido");
  let inputColor = document.getElementById("inputColor");
  let botonGuardar = document.getElementById("botonGuardar");

  botonGuardar.onclick = (event) => {

    event.preventDefault();

    let objPreferencias = {
      nombre: inputNombre.value,
      apellido: inputApellido.value,
      color: inputColor.value
    };

    // JSON.stringify(objeto | arreglo) => devuelve el valor en STRING
    // del json pasado como parámetros

    let preferenciasString = JSON.stringify(objPreferencias);

    localStorage.setItem('preferencias', preferenciasString);


  }

  let cargarPreferencias = () => {
    let preferenciasString = localStorage.getItem('preferencias');
    // JSON.parse(JSON string) => devuelve un objeto JSON a partir
    // de un string pasado por parámetros.
    let objPreferencias = JSON.parse(preferenciasString);

    inputNombre.value = objPreferencias.nombre;
    inputApellido.value = objPreferencias.apellido;
    inputColor.value = objPreferencias.color;

  }
  cargarPreferencias();
}