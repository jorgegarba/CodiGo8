let buscarPorId = (id) => {

  return new Promise((resolve, reject) => {
    // COLOCAR CODIGO AJAX CON O SIN JQUERY para buscar un recurso dado su ID
    // de sus cuentas de MockApi Imprimir la data cuando llegue
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4) {
        if (ajax.status == 404) {
          reject("No existe ese producto");
        } else {
          resolve(ajax.responseText);
        }

      }
    }
    ajax.open("GET", "https://5dc194f36ca10a0014d5d95d.mockapi.io/producto/" + id);
    ajax.send(null);
  })


}


let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.onclick = () => {
  let inputId = document.getElementById("inputId");
  buscarPorId(inputId.value)
    .then((rpta) => {
      console.log("éxito");
      console.log(rpta);
    }).catch((error) => {
      console.log("error");
      console.log(error);
    });

}



let buscarClima = ciudad => {
  return new Promise((resolve, reject) => {
    // COLOCAR CODIGO AJAX CON O SIN JQUERY para buscar un recurso dado su ID
    // de sus cuentas de MockApi Imprimir la data cuando llegue
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4) {
        if (ajax.status == 404) {
          reject("No existe ese producto");
        } else {
          resolve(JSON.parse(ajax.responseText));
        }
      }
    }
    ajax.open("GET", `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=f216cdc5ffb3839b7ebdb07394220bc1`);
    ajax.send(null);
  })
}



let btnBuscarClima = document.getElementById("btnBuscarClima");
let inputCiudad = document.getElementById("inputCiudad");


btnBuscarClima.onclick = () => {
  buscarClima(inputCiudad.value).then((rpta) => {
    console.log(rpta);
  })
}


