import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'


const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#49D0B2'
  },
  contenidoArriba: {
    flex: 1,
    backgroundColor: '#49D0B2'
  },
  contenidoAbajo: {
    flex: 1.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
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

      </View>
      <View style={misEstilos.contenidoAbajo}>

      </View>
    </View>
  )
}

export default PokeInfo
