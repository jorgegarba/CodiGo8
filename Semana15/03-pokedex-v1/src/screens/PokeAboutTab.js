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
    // flex: 1
    marginBottom: 7
  },

  pesoTallaView: {
    // flex: 1,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 15,
    margin: 20
  },

  generoView: {
    flex: 1
  },
  talla: {
    flex: 1
  },
  peso: {
    flex: 1
  },
  negrita: {
    fontWeight: 'bold',
    color: '#666',
    fontSize: 18
  },
  titulos: {
    flexDirection: 'row'
  },
  valores: {
    flexDirection: 'row'
  },
  tallaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pesoView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }


})
export default class PokeAboutTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
      descripcion: '',
      peso: 0,
      talla: 0
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

    let endpoint2 = `https://pokeapi.co/api/v2/pokemon/${global.pokemonId}`;
    let rpta2 = await axios.get(endpoint2);
    let { height, weight } = rpta2.data;

    let descripcion = this.obtenerCastellano(rpta.data.flavor_text_entries)
    this.setState({
      descripcion: descripcion,
      cargando: false,
      peso: weight,
      talla: height
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
          <View style={misEstilos.titulos}>
            <View style={misEstilos.talla}>
              <Text style={misEstilos.negrita}>Talla:</Text>
            </View>
            <View style={misEstilos.peso}>
              <Text style={misEstilos.negrita}>Peso:</Text>
            </View>
          </View>
          <View style={misEstilos.valores}>
            <View style={misEstilos.tallaView}>
              <Text >{this.state.talla * 10} cm .</Text>
            </View>
            <View style={misEstilos.pesoView}>
              <Text >{(this.state.peso / 10).toFixed(2)} Kg.</Text>
            </View>
          </View>
        </View>
        {/* Genero */}
        <View style={misEstilos.generoView}>
          <Text>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</Text>
        </View>
      </View>
    )
  }
}
