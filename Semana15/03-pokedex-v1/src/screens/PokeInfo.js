import React, { useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements';
// import {  } from 'react-native-elements';

const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#49D0B2',
    paddingTop: StatusBar.currentHeight
  },
  contenidoArriba: {
    flex: 1,
    backgroundColor: '#49D0B2'
  },
  contenidoAbajo: {
    flex: 1.2,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: -1
  },
  headerContainer: {
    flex: 16.6,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:25,
    paddingRight:25
  },
  nombreContainer: {
    flex: 16.6,
    backgroundColor: 'red'
  },
  tipoContainer: {
    flex: 16.6,
    backgroundColor: 'green'
  },
  imagenContainer: {
    flex: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
    zIndex: 1000,
    transform: [{
      translateY: 50
    }],
  }
})












const PokeInfo = (props) => {


  // info => objeto que nos llega por parametros
  // en la navegación, desde PokeHome
  let info = props.navigation.getParam('pokemon');
  console.log(info);

  return (
    <View style={misEstilos.contenedor}>
      <View style={misEstilos.contenidoArriba}>
        {/* headerContainer */}
        <View style={misEstilos.headerContainer}>
          <Icon name={"arrow-back"}
            color={'white'} />
          <Icon name={"home"}
            color={'white'} />
        </View>

        {/* nombreContainer */}
        <View style={misEstilos.nombreContainer}>

        </View>

        {/* tipoContainer */}
        <View style={misEstilos.tipoContainer}>

        </View>

        {/* imagenContainer */}
        <View style={misEstilos.imagenContainer}>
          <Image source={{
            uri: info.sprites.front_default
          }} style={misEstilos.imagen} />
        </View>
      </View>
      <View style={misEstilos.contenidoAbajo}>

      </View>
    </View>
  )
}

export default PokeInfo
