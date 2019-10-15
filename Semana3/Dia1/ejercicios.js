var concatenar = +prompt("Ingrese el valor");
var numeros="";
var numerospares="";
for (let i = concatenar-5 ; i < concatenar; i++) {
    numeros += i+",";
}
console.log(numeros);

for (let i = concatenar-10; i < concatenar; i++) {
    if(i%2===0){
        numerospares += i+",";
    }
}
console.log(numerospares);
