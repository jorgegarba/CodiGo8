import "../css/styles.css";

// document.body.innerHTML = "Hola";

let caja = document.createElement("div");

let getUsers = () => {
    return new Promise((resolve, reject) => {
        fetch("https://reqres.in/api/users?page=2")
            .then((respuesta)=>{
                return respuesta.json()
            }).then((usuarios) => {
                resolve(usuarios);
            }).catch(err => {
                reject("error algo paso :( , " + err);
            })
    })
}

// getUsers().then((usuarios) => {
//     console.table(usuarios.data);
//     caja.innerHTML = JSON.stringify(usuarios.data);
//     document.body.appendChild(caja);
// });


async function mostrarUsuarios(){
    let rpta = await getUsers();
    console.log(rpta);
}
mostrarUsuarios()
