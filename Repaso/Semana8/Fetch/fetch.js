url = "http://127.0.0.1:5000/tipo/crear"
url_traer="http://127.0.0.1:5000/tipo/buscar/Pasto"
/*
fetch(url, {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({ descripcion: 'Pasto'})
})
*/
fetch(url_traer)
.then((response) => {
    console.log(response);
    return response.json()
})
    .then((mensaje) => {
        console.log(mensaje);
    })