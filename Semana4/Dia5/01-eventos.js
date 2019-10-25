let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");

let clickGlobal = (evento) => {
  // evento.target.style.color = "#ff7777";
  if (evento.target.getAttribute("id") == "boton1") {
    console.log("click al boton 1");
  } else {
    console.log("click al boton 2");
  }
}

boton1.onclick = clickGlobal;
boton2.onclick = clickGlobal;


// hacer un evento click al body
// para dicbujar un circulo de 10px x 10px 
// de color rojo donde sea, que se le haya hecho
// click.


let miBody = document.getElementById("miBody");
miBody.onclick = (evento) => {
  let coordX = evento.offsetX;
  let coordY = evento.offsetY;

  console.log(`${coordX}, ${coordY}`);


  let div = document.createElement('div');
  div.style.backgroundColor = "#ff0000";
  div.style.width = "10px";
  div.style.height = "10px";
  div.style.borderRadius = "50%";
  div.style.position = "absolute";
  div.style.left = coordX + "px";
  div.style.top = coordY + "px";

  miBody.appendChild(div);



}
