import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import fondo from './../../../assets/bghome.jpg';
import { Button } from 'react-native-elements';
import Dimensiones from '../../services/dimensiones';

import Icon from 'react-native-vector-icons/FontAwesome5';

const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1
  },
  contenedorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Home extends Component {
  render() {
    return (
      <ImageBackground source={fondo} style={misEstilos.contenedor}>
        <View style={misEstilos.contenedorView}>
          <Button
            title={'Iniciar Sesión'}
            buttonStyle={{
              width: Dimensiones.getAncho / 2,
              backgroundColor: 'rgba(204,196,78,0.8)'
            }}
            raised
            icon={
              <Icon name={'arrow-right'}
                size={15}
                color={"white"}
                style={{ marginRight: 8 }} />
            } />
        </View>
      </ImageBackground>
    )
  }
}

