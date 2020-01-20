import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import fondo from './../../../assets/bghome.jpg';
import { Button } from 'react-native-elements';

const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1
  },
  contenedorView: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default class Home extends Component {
  render() {
    return (
      <ImageBackground source={fondo} style={misEstilos.contenedor}>
        <View style={misEstilos.contenedorView}>
          <Button title={'Iniciar Sesión'} />
        </View>
      </ImageBackground>
    )
  }
}

