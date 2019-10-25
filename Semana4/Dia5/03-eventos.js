let paises = [
  {
    nombre: 'Perú',
    clave: 51
  },
  {
    nombre: 'Argentina',
    clave: 28
  }
];

let listaPaises = document.getElementById('listaPaises');

// poblar la lista de paises con la data del arreglo 
// paises
// <option value ="clave"> nombre del pais </option>

paises.forEach((objPais) => {
  let option = document.createElement("option");
  option.innerText = objPais.nombre;
  option.setAttribute("value", objPais.clave);
  listaPaises.appendChild(option);
});

listaPaises.onchange = function () {
  // this => hace referencia al elemento en el que se
  // encuentra la función.
  // this => solo funciona cuando la funcion anonima
  // no es funcion de flecha

  // value => el atributo value del option seleccionado
  console.log(this.value);
  // selectedIndex => la posición del option seleccionado
  console.log(this.selectedIndex);
  // children => arreglo de options que contiene el select
  console.log(this.children);
  // obtener el texto del option seleccionado
  console.log(this.children[this.selectedIndex].innerHTML);


}




let linkGoogle = document.getElementById("linkGoogle");

linkGoogle.onclick = (evento) => {
  // preventDefault() => Cancela cualquier comportamiento
  // por defecto que desencadene el evento
  evento.preventDefault();
  console.log("Se hizo click al link");
}

// oncontextmenu => evento que se desencadena cuando 
// hacen click derecho sobre el elemento

linkGoogle.oncontextmenu = (evento) => {
  evento.preventDefault();
}

// establecer el contextmenu para el body
// En cualquier lugar que hagan click derecho sobre el 
// body, se dibujará un div > ul > li*2
// El texto del li 1 será = Opción 1
// El texto del li 2 será = Opción 2

let divMenu = document.createElement("div");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
li1.innerHTML = "Imprimir";
li1.onclick = () => {
  window.print();
}

li2.innerHTML = "OPCIÓN 2";
ul.appendChild(li1);
ul.appendChild(li2);
divMenu.appendChild(ul);
divMenu.style.position = "absolute";
divMenu.style.visibility = "hidden";
divMenu.classList.add("mi-menu");


let miBody = document.getElementById("miBody");
miBody.appendChild(divMenu);


miBody.oncontextmenu = (evento) => {
  /**
   * 1. cancelar el evento por defecto
   * 2. obtener las coordenadas donde se hizo click
   * 3. crear un div con el ul y los lis
   * 4. darle estilos al div, ul y los lis
   * 5. no olvidar darle position absoulte al div
   * 6. mover al div con respecto a las coordenadas
   *    obtenidas en el punto2.
   * 7. hacer un appendChild del body con el div
   */
  evento.preventDefault();
  let coordX = evento.offsetX;
  let coordY = evento.offsetY;

  divMenu.style.left = coordX + 'px';
  divMenu.style.top = coordY + 'px';
  divMenu.style.visibility = "visible";
}

miBody.onclick = () => {
  divMenu.style.visibility = 'hidden';
}


