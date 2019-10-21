let nombre = new String("Tecsup Arequipa Codigo");

// Propiedades de los Strings

// length => indica el número de caracteres del string
console.log(nombre.length);
// toLowerCase() => devuelve el valor en minuscula del string
// No cambia el verdadero valor del string
console.log(nombre.toLowerCase());
// toUpperCase() => devuelve el valor en mayusculas del string
// No cambia el veradero valor del string
console.log(nombre.toUpperCase());
// trim() => quita los espacios en blanco a los extremos del string
// Ejm: "  Bienvenidos a Codigo    "
// trim() =>  "Bienvenidos a Codigo"
console.log(nombre.trim());

// substr(inicio, nroletras) => devuelve una subcadena a partir
// del string original
// inicio => posición en la que inicia la subcadena
// nroletras => la cantidad de espacios luego del inicio
console.log(nombre.substr(4, 4));

// substring(inicio,final) => devuelve una subcadena a partir del 
// string original
// inicio => posición en la que inicia la subcadena
// final => posición +1 en la que termina la subcadena
// Nota, si no se especifica el final, la subcadena, termina en el 
// final de la cadena
console.log(nombre.substring(5, 9));


// imprimir los 5 ultimos caracteres del string
console.log(nombre.substring(nombre.length - 5));


// startsWith(cadena) => devuelve 'true' en caso de que el string
// inicie con el contenido de la variable cadena
console.log(nombre.startsWith("Tec"));

// endsWith(cadena) => analogo a startsWith, pero se analiza
// que el string finalice con la cadena.
console.log(nombre.endsWith("go"));

// indexOf(cadena) => devuelve la posición en la que una 
// subcanena inicia. Si la subcadena no existe, devuelve -1
console.log(nombre.indexOf("Are"));

// charAt(posicion) => devuelve la letra que se encuentra
// en posición(número) dada.
console.log(nombre.charAt(2));
console.log(nombre[2]);

// EJERCICIOS CLASICASOS
// Cada ejercicio es una función que recibe un string
// ejm
// /// let cuentaVocales = (cadena) => {

// /// }
// 1. Determinar el numero de vocales en un string
// 2. Determinar el numero de palabras en un string
// 3. Determinar si una cadena es un palíndromo
// Ejm: 'oso'
// Ejm: 'anita lava la tina'

// ejercicio 3
let esPalindromo = (cadena) => {
  let cadena2 = "";
  // quitar los espacios en blanco
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] != " ") {
      cadena2 = cadena2 + cadena[i];
    }
  }
  // ver si la cadena es par o impar para 
  // determinar su numero de comparaciones
  let nroVueltas = 0;
  if (cadena2.length % 2 == 0) {// es par
    nroVueltas = cadena2.length / 2;
  } else {
    nroVueltas = cadena2.length / 2 - 0.5;
  }


  let rpta = true;
  for (let j = 0; j < nroVueltas; j++) {
    if (cadena2[j] != cadena2[cadena2.length - 1 - j]) {
      rpta = false;
      break;
    }
  }

  if (rpta) {
    console.log("ES PALINDROMO");
  } else {
    console.log("NO ES PALINDROMO");
  }
  // OPERADOR TERNARIO
  // Se usa cuando tanto el if como el else, 
  // tienen respuesta de una sola linea de ejecución 

  // rpta con operador ternario 
  // rpta ? console.log("si es palindromo") : console.log("no es palindromo");
  

}

esPalindromo("qqwqsq");