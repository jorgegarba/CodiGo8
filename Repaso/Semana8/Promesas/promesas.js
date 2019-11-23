// let variable = 20;
// PARTE 1
/*
let variable = +prompt('Ingrese un valor')
const miPromesa = new Promise((resuelto,rechazado)=>{
    if (variable===20){
        resuelto('La variable es igual a 20')
    }else{
        rechazado('La variable no es igual a 20')
    }
});
miPromesa.then((respuesta)=>{
    console.log(respuesta)
}).catch((error)=>{
    console.error(error)
})
*/

// PARTE 2
/*
let variable2 = 50
console.log('1. Se inicio el proceso')
setTimeout(() => {
    variable2 = variable2 * 3;
    console.log('2. Proceso Terminado . . .');
}, 2000)
console.log('3. El resultado es: ' + variable2);
*/

// PARTE 3
/*
let variable2 = 55
const promesa = new Promise((resuelto, rechazado) => {
    setTimeout(() => {
        variable2 = variable2 * 3;
        console.log('2. Proceso Terminado . . .');
        if (variable2===150){
        resuelto(variable2);
        }
        else{
            rechazado(variable2)
        }
    }, 2000)
})
console.log('1. Proceso inicializado . . . ')
promesa.then(
    (res) => {
    console.log('3. El resultado es: ' + res)
}).catch(
    (res)=>{
    console.error('3. El resultado es: '+res)
});
console.log('4. El proceso es el cuatro')
*/

// PARTE 4
let usuarios=[
    {
        id:1,
        nombre:"Eduardo"
    },
    {
        id:2,
        nombre:"Tu Papi"
    }

]
let direcciones=[
    {
        id:1,
        direccion:'Mayta Capac 125'
    },
    {
        id:3,
        direccion:'Yura 512'
    }
]

const obtenerUsuario= (id)=>{
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuario => usuario.id === id)){
            console.log(usuarios.find(usuario => usuario.id === id))
            // ESTO NO SE DEBE HACER
            // resolve('El usuario existe')
            console.log('El usuario existe')

            // ACA ESTOY ENCADENANDO MI RESOLVE CON LO QUE ME RETORNE MI OTRA PROMESA DE OBTENER DIRECCIONES
            resolve(obtenerDirecciones(id))
        }else{
            reject('El usuario no existe')
        }
    })
}
const obtenerDirecciones= (id)=>{
    return new Promise((resolve,reject)=>{
        if(direcciones.find(direccion=>direccion.id === id)){
            resolve('La direccion existe')
        }else{
            reject('La direccion no existe')
        }
    })
}

// LA BUENA FORMA
obtenerUsuario(2)
.then((res)=>{
    // RETORNA LA PROMESA DE OBTENERDIRECCIONES
    return res
})
.then((mensaje)=>{
    console.log(mensaje)
})
.catch((error)=>{
    console.error(error)
})

// ENCADENAMIENTO TRUCHO, NO SE DEBE HACER PUESTO QUE EL CODIGO CRECE HORIZONTALMENTE Y SE HACE MAS DIFICIL DE ENTENDER
// obtenerUsuario(3).then(
//     (res)=>{
//         console.log(res);
//         obtenerDirecciones(3).then(
//             (mensaje)=>{
//                 console.log(mensaje)
//             }
//         ).catch(
//             (error)=>{
//                 console.error(error)
//             })
//     }
// ).catch((error)=>{
//     console.error(error)
// })

