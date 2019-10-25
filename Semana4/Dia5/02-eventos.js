let inputNombre = document.getElementById("inputNombre");
let aviso = document.getElementById("aviso");

// onfocus => cuando el cursor o el tabindex está
// sobre un elemento

inputNombre.onfocus = () => {
  inputNombre.classList.add("input-focus");
}
// onblur => cuando el cursos o el tabindex abandona
// el elemento
inputNombre.onblur = () => {
  inputNombre.classList.remove("input-focus");
}

// onkeyup => cuando una tecla deja de ser presionada
// de un elemento

inputNombre.onkeyup = (evento) => {
  console.log(evento.key);
  console.log(inputNombre.value);
  aviso.innerText = `Le quedan ${20 - inputNombre.value.length} caracteres`;
}