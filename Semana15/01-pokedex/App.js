import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from './src/invitado/screens/Home'
import PokemonLista from './src/invitado/screens/PokemonLista'

export default class App extends Component {
  render() {
    return (
      // <Home />
      <PokemonLista />
    )
  }
}

