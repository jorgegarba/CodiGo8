window.onload = () => {
  // variables globales
  let btnAgregarElemento = document.getElementById("btnAgregarElemento");
  let cuerpoTabla = document.getElementById("cuerpoTabla");




  let escucharCambios = (inputCant, inputPUnit, inputTotal) => {
    inputCant.onkeyup = () => {
      let cantidad = +inputCant.value;
      let punitario = +inputPUnit.value;
      inputTotal.value = +(cantidad * punitario);
    }
    inputPUnit.onkeyup = () => {
      let cantidad = +inputCant.value;
      let punitario = +inputPUnit.value;
      inputTotal.value = +(cantidad * punitario);
    }
  }


  /**
   * Función que agrega una fila al tbody
   */
  let agregarFila = () => {
    let tr = document.createElement("tr");

    let tdNro = document.createElement("td");
    let tdCant = document.createElement("td");
    let tdDesc = document.createElement("td");
    let tdPUnit = document.createElement("td");
    let tdTotal = document.createElement("td");


    let inputCant = document.createElement("input");
    inputCant.setAttribute("type", "number");

    let inputDesc = document.createElement("input");

    let inputPUnit = document.createElement("input");
    inputPUnit.setAttribute("type", "number");

    let inputTotal = document.createElement("input");
    inputTotal.setAttribute("type", "number");
    inputTotal.setAttribute("disabled", "disabled")



    escucharCambios(inputCant, inputPUnit, inputTotal);


    tdCant.appendChild(inputCant);
    tdDesc.appendChild(inputDesc);
    tdPUnit.appendChild(inputPUnit);
    tdTotal.appendChild(inputTotal);

    tr.appendChild(tdNro);
    tr.appendChild(tdCant);
    tr.appendChild(tdDesc);
    tr.appendChild(tdPUnit);
    tr.appendChild(tdTotal);


    cuerpoTabla.appendChild(tr);


  }




  btnAgregarElemento.onclick = () => {
    agregarFila();
  }









}