var div1 = document.getElementById("div1")
// modificar los estilos de ese elemento
// elemento.style.[estilo] => para alterar o añadir estilos por medio del JS
div1.style.color= "#FF8421";
div1.style.padding= "10px";
div1.style.border = "1px dotted red";
div1.style.opacity = "0.5"
// como vemos le podemos dar todos los estilos a nuestro html
// Si un estilo en css tiene una sola palabra
// EJEMPLO: 'padding'
// entonces en js es style.padding
// Pero si un estilo esta conformado por dos palabras como por EJEMPLO: background-image
// entonces en js es style.backgroundImage
// Se elimina el "-" y se usa Camel Case

// OTRAS PROPIEDADES DE LOS ELEMENTOS
// clientWidth => obtiene el ancho del elemento
console.log(`Ancho del div ${div1.clientWidth}`);
// clientHeight => obtiene la altura del elemento
console.log(`Altura del div ${div1.clientHeight}`);
// offsetTop => cantidad de pixeles de desplazo desde el techo de su contenedor
console.log(`Offset Top ${div1.offsetTop}`);
// offsetLeft => cantidad de pixeles de desplazo desde la izquierda de su contenedor
console.log(`Offset Left ${div1.offsetLeft}`);
// classname => devuelve o asigna el nombre de la clase que tiene el elemento
console.log(`Clase del div ${div1.className}`);
// div1.className="celeste"
// console.log(`Clase del div ${div1.className}`);
// classlist => devuelve un arreglo con todas las clases de ese elemento
console.log(div1.classList);
// classlit.add([nombre de la clase])=> agrega la clase A LA LISTA de clases
div1.classList.add("celeste");
// classList.remove([nombre de la clase])=> elimina la clase DE LA LISTA de clases
div1.classList.remove("celeste");
// classList.contains([nombre de la clase]) => verifica si nuestro elemento tiene
// dentro de su lista esa clase y devuelve Verdadero o Falso
console.log(div1.classList.contains("contenedor"));
// classList.toggle([nombre de la clase])=> verifica si esta la clase, si esta, la 
// quita, y sino esta, la agrega
setInterval(() => {
    div1.classList.toggle("celeste")
}, 150);

// MODIFICANDO SU CONTENIDO
// innerHTML => Declara o devuelve el contenido de un elemento 
// <elemento>SOY SU CONTENIDO</elemento>
console.log(div1.innerHTML);
div1.innerHTML="<p>Ahora yo soy el texto</p>"