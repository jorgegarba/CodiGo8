// Crear un menú 
// que le pida escoger al cliente entre
// 3 opciones, 
// si el cliente marca cualquiera de las 3
// el programa mostrar un mensaje distinto en
// la consola.
// Si el cliente decide salir, el programa
// finalizará

let opcion = 0;

do {
  opcion = +prompt(`===== MENU =====
                    1. Opcion 1
                    2. Opcion 2
                    3. Opcion 3
                    4. Salir
                    =================`);
  switch (opcion) {
    case 1:
      console.log("Escogió la opción 1");
      break;
    case 2:
      console.log("Escogió la opción 2");
      break;
    case 3:
      console.log("Escogió la opción 3");
      break;
    case 4:
      console.log("Hasta pronto");
      break;
    default:
      console.log("Error, ingrese una opción correcta");
      break;
  }
} while (opcion != 4)





/**
 * Crear una clase de nombre 'Restaurant' con los siguientes atributos
 *  nombre:string
 *  direccion:string
 *  platos: [{}] => arreglo de objetos
 *    OJO: No se debe crear una clase para un plato
 *    Cada plato tendrá los siguientes atributos
 *      nombre:string
 *      calorias:numero
 *      precio:numero
 *  El constructor del Restaurant deberá recibir el nombre y la 
 *  direccion del restaurant por defecto, el atributo 'platos'
 *  será un arreglo vacío por defecto.
 * ----- Cuando el programa inicie, se deberá pedir una sola vez
 * ----- el nombre y la dirección del restaurant
 *  OPCION 1: (Agregar Plato)
 *    El sistema pedirá al usuario que ingrese el nombre, calorias y precio
 *    del plato que se quiere agregar al arreglo de platos.
 *  OPCION 2: (Mostrar Lista de Platos)
 *    El sistema imprimirá la lista de platos con el nombre, calorias y precio
 *    de cada uno de ellos.
 *  OPCIÓN 3: Salir
 */