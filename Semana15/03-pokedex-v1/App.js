import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PokeHome from './src/screens/PokeHome'

const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1
  }
})

const App = () => {

  return (
    <View style={misEstilos.contenedor}>
      <PokeHome />
    </View>
  )
}

export default App
