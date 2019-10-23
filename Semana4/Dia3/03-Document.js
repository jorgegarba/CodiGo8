// El objeto document sirve para manipular cualquier elemento del DOM
// captura un elemento por su ID definido entre parentesis
// nos va a devolver un unico o si hemos escrito mal el primer elemento que coincida con ese ID
var parrafo01 = document.getElementById("parrafo");
parrafo01.style.color = 'Blue';
console.log(parrafo01);
// getElementByClassName([nombre de la clase])
// devuelve un arreglo de los elementos con ese nombre de la clase
var claseRojo = document.getElementsByClassName("rojo")
console.log(claseRojo);
// getElementByTagName([nombre de la etiqueta]) 
// devuelve un arreglo de los elementos que son de esa especie
var divs = document.getElementsByTagName("div")
console.log(divs);
// querySelector([Selector como en CSS3 o EMMET])
// Obtiene un elemento que coincida con el selector como si estariamos en css3
var claseRojoCSS3 = document.querySelector(".rojo");
console.log(claseRojoCSS3);
// querySelectorAll([Selector como en CSS3])
// devuelve un arreglo con todos los elementos que coincidan con el selector como si estariamos
// en CSS3
var claseRojoCSS3Todos = document.querySelectorAll(".rojo");
console.log(claseRojoCSS3Todos);
