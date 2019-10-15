// Ejercicio 2
/*
var simples = +prompt("Cuantas hamburguesas simples desea");
var dobles = +prompt("Cuantas hamburguesas dobles desea");
var triples = +prompt("Cuantas hamburguesas triples desea");

var pago = prompt("Paga con efectivo (E) o con tarjeta (T)");
simples=simples*20;
dobles=dobles*25;
triples=triples*28;
var pagar=simples+dobles+triples;
if(pago==="E")
{
    console.log("Su monto a pagar es: "+pagar);
}
else{
    console.log(`Su monto a pagar es: ${pagar*1.05}`);
}
*/

// Ejercicio 3

var numeros = [];
var cantidad = +prompt("Ingrese cuantas cantidades quiere calcular");
for (let i = 0; i < cantidad; i++) {
    numeros.push(+prompt(`Ingrese el numero ${i+1}`));
}
var positivas=0, negativas=0;
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]>=0){
        positivas++;
    }else{
        negativas++;
    }
}
console.log(numeros);
console.log(`Hay ${positivas} numeros positivos y ${negativas} numeros negativos`);


// Ejercicio 4
/*
var focos = +prompt("Cuantos focos hay");
var verde = 0, rojo=0, azul=0;
for (let i = 0; i < focos; i++) {
    let foco = +prompt(`El foco ${i+1} es: 1. Verde, 2. Rojo, 3. Azul`)
    switch (foco) {
        case 1:
            verde++;
            break;
        case 2:
            rojo++;
            break;
        case 3:
            azul++;
            break;
        default:
            alert("Numero incorrecto, vuelva a ingresar");
            i--;
            break;
    }
}
console.log(`En total hay ${verde} focos verdes, ${rojo} focos rojos y ${azul} focos azules`);
*/

// Ejercicio 8
/*
var cantidad = +prompt("Ingrese la cantidad de articulos");
var total = 0;
for (let i = 0; i < cantidad; i++) {
    var monto = +prompt(`Monto a pagar del articulo ${i+1}`);
    var dscto = 0;
    switch (true) {
        case monto >= 200:
            dscto = 0.85;
            break;
        case monto > 100 && monto < 200:
            dscto = 0.88;
        default:
            dscto = 0.90;
            break;
    }
    total= total + (monto*dscto);
    console.log(`El precio del articulo es ${monto * dscto}`);

}
console.log(`El total a pagar es: ${total}`);
*/

// Ejercicio 11
/*
var limite = +prompt("Ingrese el valor de x");
// var exponencial=1;
// for (let i = 1; i <= limite; i++) {
//     var factorial=1;
//     for (let j = 1; j <= i; j++) {
//         factorial *=j;
//     }
//     console.log(`Factorial de ${i}:${factorial}`);
//     exponencial=exponencial+(Math.pow(limite,i)/(factorial));
    
// }
// console.log(exponencial);
console.log(Math.exp(limite));
*/

// Ejercicio 15
/*
var nombre = prompt("Ingrese su nombre");
var horas = +prompt("Ingrese sus horas");
var sueldoxhora = +prompt("Sueldo por hora");
var ganancia = horas * sueldoxhora;
switch (true) {
    case ganancia > 0 && ganancia <= 150:
        ganancia *= 0.95;
        break;
    case ganancia > 150 && ganancia < 300:
        ganancia *= 0.93;
        break;
    case ganancia >= 300 && ganancia < 450:
        ganancia *= 0.91;
        break;
    default:
        ganancia = ganancia;
        break;
}
console.log(`${nombre} tu sueldo esta semana es de :S/${ganancia} con descuentos`);
*/

// Ejercicio 21

var moneda = 0;
var billete = 0;
var suma_moneda = 0;
var suma_billete = 0;
var continuar = "S";
while (continuar==="S" || continuar==="s") {
    moneda = +prompt("Que cantidades monedas hay")
    if(moneda%10===0 || moneda%5===0)
    {
        suma_moneda+=moneda;
    }
    else{
        alert("Error, solo puede haber monedas multiplo de 10, de 5 o de 1 peso")
    }
    billete = +prompt("Que cuantidad de billetes hay")
    if(billete%10===0 || billete%20===0 || billete%50===0)
    {
        suma_billete+=billete;
    }
    else{
        alert("Error, solo puede haber billetes multiplo de 10, de 20 y 50 pesos")
    }
    continuar=prompt("Desea continuar? S/N")
}
console.log(`El total de dinero en tu monedero es de: S/${suma_moneda} en monedas y S/${suma_billete} en billetes`);
