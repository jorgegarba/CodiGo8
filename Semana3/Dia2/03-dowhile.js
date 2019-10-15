var pass = "123";
var intento = "";
var c = 0;
var acceso = false;
do {
  intento = prompt("ingresa la contra");
  c = c + 1;
  if (intento == pass) {
    console.log("Bienvenido");
    acceso = true;
  }
} while (c < 3 && acceso == false);

if (acceso == false) {
  console.log("excediste el numero de intentos");
}