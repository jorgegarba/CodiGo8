
let sumarV2 = function (a, b) {
  return a + b;
}


let getDoble = function (f, nro1, nro2) {

  let s = f(nro1, nro2);
  console.log(s);

}

getDoble(sumarV2, 13, 20);