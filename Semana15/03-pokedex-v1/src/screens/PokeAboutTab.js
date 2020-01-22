import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Global } from '../servicios/Global'
import axios from 'axios';
const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: 10
  },
  descripcionView: {
    flex: 1
  },
  pesoTallaView: {
    flex: 1
  },
  generoView: {
    flex: 1
  }
})
export default class PokeAboutTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
      descripcion: ''
    }
  }

  obtenerCastellano = (especies) => {
    let castellano = especies.filter(e => (e.language.name === "es"))
    return castellano[0].flavor_text;
  }

  traerEspecie = async () => {
    let global = Global.getInstance();
    let endpoint = `https://pokeapi.co/api/v2/pokemon-species/${global.pokemonId}`;
    let rpta = await axios.get(endpoint);
    
    let descripcion = this.obtenerCastellano(rpta.data.flavor_text_entries)
    this.setState({
      descripcion: descripcion,
      cargando: false,
    })
  }


  componentDidMount() {
    this.traerEspecie();
  }

  render() {

    return (
      <View style={misEstilos.contenedor}>
        {/* Descripcion */}
        <View style={misEstilos.descripcionView}>
          {
            this.state.cargando ? null :
              <Text>
                {
                  this.state.descripcion
                }
              </Text>
          }
        </View>
        {/* Peso y Talla */}
        <View style={misEstilos.pesoTallaView}>
          <Text>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</Text>
        </View>
        {/* Genero */}
        <View style={misEstilos.generoView}>
          <Text>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</Text>
        </View>
      </View>
    )
  }
}
