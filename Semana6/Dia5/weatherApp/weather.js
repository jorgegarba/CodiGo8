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