import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

export default class PokemonLista extends Component {

  lista = [
    { nombre: 'Pikachu', foto: '', tipo: 'Electrico' },
    { nombre: 'Chicorita', foto: '', tipo: 'Planta' }
  ]

  renderPokemon = ({ item }) => {
    return <ListItem
      title={item.nombre}
      subtitle={item.tipo}
      onPress={() => {
        console.log("Escogiste a " + item.nombre);

      }}
      bottomDivider
      chevron
    />
  }
  render() {
    return (
      <FlatList
        data={this.lista}
        renderItem={this.renderPokemon}
      />
    )
  }
}
