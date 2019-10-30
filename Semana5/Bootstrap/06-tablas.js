window.onload = () => {
  let tablaObjetivo = document.getElementById("tablaObjetivo");
  let btnStriped = document.getElementById("btnStriped");
  let btnHover = document.getElementById("btnHover");
  let btnSm = document.getElementById("btnSm");
  let btnDark = document.getElementById("btnDark");
  let btnBordered = document.getElementById("btnBordered");

  btnBordered.onclick = () => {
    // tablaObjetivo.classList.toggle('table-bordered');

    if (tablaObjetivo.classList.contains('table-bordered')) {
      tablaObjetivo.classList.remove('table-bordered');
    } else {
      tablaObjetivo.classList.add('table-bordered');
    }

  }

}