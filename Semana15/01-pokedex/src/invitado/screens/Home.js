import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import fondo from './../../../assets/bghome.jpg';
import { Button } from 'react-native-elements';
import Dimensiones from '../../services/dimensiones';

import Icon from 'react-native-vector-icons/FontAwesome5';
import PokeBoton from '../../componentes/PokeBoton';

const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1
  },
  contenedorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
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
              backgroundColor: 'rgba(204,196,78,0.8)',
              marginBottom: 15
            }}
            icon={
              <Icon name={'arrow-right'}
                size={15}
                color={"white"}
                style={{ marginRight: 8 }} />
            } />

          <Button
            title={'Registrarme'}
            buttonStyle={{
              width: Dimensiones.getAncho / 2,
              backgroundColor: 'rgba(220,100,20,0.8)',
              marginBottom: 15,
            }}
            icon={
              <Icon name={'user-plus'}
                size={15}
                color={"white"}
                style={{ marginRight: 8 }} />
            } />
          <Button
            title={'Facebook'}
            buttonStyle={{
              width: Dimensiones.getAncho / 2,
              backgroundColor: 'rgba(69,69,146,0.6)',
              marginBottom: 15
            }}
            icon={
              <Icon name={'facebook'}
                size={15}
                color={"white"}
                style={{ marginRight: 8 }} />
            } />

        </View>
      </ImageBackground>
    )
  }
}

