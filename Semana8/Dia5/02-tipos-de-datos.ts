// string
let nombre: string;
nombre = "Jorge";
nombre = "Luis";
//number
let edad: number;
edad = 28;
//booleanos
let activo: boolean;
activo = true;
// declaracion directa
let apellido: string = "Garnica";

//arreglos
let libros: Array<string>;
libros.push("La Biblia");

// arreglos forma 2
let precios: Number[];
precios.push(90.5);

// TIPO DE DATO 'ANY'
let objeto: any;
objeto = "asd";
objeto = 90;

// arreglo any
let arregloAny: Array<any>;
arregloAny.push(90);
arregloAny.push("asda");

// variables de 2 tipos de datos
let alfanumerico: string | number;
alfanumerico = "Tres";
alfanumerico = 3;

// arreglos de 2 tipos de datos
let arreglo2: Array<string | number>;
arreglo2.push("Texto");
arreglo2.push(2);

// ========================= //

let sumar = (a:number, b:number) => {
  console.log(a + b);
}

sumar(10, 3);