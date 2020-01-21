import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PokedexStackNavigator from './src/navigations/PokedexStackNavigator';

const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1
  }
})

const App = () => {

  return (
    <View style={misEstilos.contenedor}>
      <PokedexStackNavigator />
    </View>
  )
}

export default App
