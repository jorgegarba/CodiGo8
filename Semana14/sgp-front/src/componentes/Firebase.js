import React, { Component } from 'react'
import * as firebase from 'firebase';
import Swal from 'sweetalert2';

var firebaseConfig = {
  apiKey: "AIzaSyBxYbn4JZx_vkLafeaJhaGmhhYbevqPMOg",
  authDomain: "codigo9-166dd.firebaseapp.com",
  databaseURL: "https://codigo9-166dd.firebaseio.com",
  projectId: "codigo9-166dd",
  storageBucket: "codigo9-166dd.appspot.com",
  messagingSenderId: "925876132315",
  appId: "1:925876132315:web:a61fea4f005db15f316ffe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let storage = firebase.storage().ref();

export default class Firebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archivo: undefined,
    }
  }

  cambiarImagen = (e) => {
    console.log(e.target.files[0]);
    this.setState({
      archivo: e.target.files[0]
    });
  }
  subirImagen = () => {
    Swal.fire({
      icon: 'info',
      text: 'Subiendo la imagen al servidor',
      allowOutsideClick: false,
      title: 'Guardando Cambios',
      showConfirmButton: false
    });
    let nombreArchivo = this.state.archivo.name;
    let nombreFinal = +(new Date()) + '-' + nombreArchivo;
    let metadata = {
      contentType: this.state.archivo.type
    }
    storage.child('fotitos/' + nombreFinal)
      .put(this.state.archivo, metadata)
      .then((response) => {
        console.log("exito");
        Swal.fire({
          icon: 'success',
          text: 'La imagen se ha subido con exito',
          timer: 2000,
          title: 'Éxito'
        })
        return response.ref.getDownloadURL()
      }).then((url) => {
        console.log("Descargar en:");
        // url de descarga
        console.log(url);
      })
  }
  render() {
    return (
      <div>
        <label htmlFor="">Subir Archivo</label>
        <input type="file" onChange={this.cambiarImagen} />
        <button onClick={this.subirImagen} >
          Subir a Firebase
        </button>
      </div>
    )
  }
}
