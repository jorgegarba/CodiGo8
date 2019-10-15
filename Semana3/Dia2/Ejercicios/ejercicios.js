/*
var salario=1500;
var total=0;
for (let anio = 1; anio <= 6; anio++) {
    salario=salario*1.10;
    console.log(`El salario en el año #${anio} es ${salario}`);
    total=total+salario;
}
console.log(`El profesor recibio despues de 6 años la cantidad de ${total}`);
*/
// Dado un arreglo con los siguientes nombres
// nombres=['Eduardo','Juan','Renzo']
// tiene que solicitar un nombre y ver si esta o no en el arreglo hasta que escriba 'salir'
var nombres = ['Eduardo', 'Juan', 'Renzo']
do {
    var palabra = prompt("Escriba un nombre a buscar o salir para terminar.")
    var encontrado = ""
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] == palabra) {
            encontrado = nombres[i];
        }
    }
    if (encontrado != "") {
        console.log(`Bienvenido ${encontrado}`);
    } else {
        console.log('No se encuentra en la lista');
    }
} while (palabra != "salir");

// Eje 22
var anterior = +prompt("Ingrese el saldo anterior del cliente:");
var compras = +prompt("Ingrese el monto de compras que realizo");
var pagoanterior = +prompt("Ingrese el pago anterior");
var multa = 1.12;
var saldoanterior = 0, saldoactual=0;
if (pagoanterior < (anterior * .15)) {
    saldoanterior = (anterior - pagoanterior) * multa + 200;
}
else {
    saldoanterior = anterior - pagoanterior
}
var saldoactual = anterior + compras;
var minimo = saldoactual*.15;
var sinimpuestos = saldoactual*.85;
console.log(`Su saldo actual es de: ${saldoactual}`);
console.log(`El monto minimo a pagar es de: ${minimo}`);
console.log(`El pago para no tener impuestos es de ${sinimpuestos}`);



