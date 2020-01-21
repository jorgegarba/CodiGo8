import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios';
import PokeCard from '../components/PokeCard';


const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  titulo: {
    flex: 0.15,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardsContainerScroll: {
    flex: 1
  }
})
const PokeHome = () => {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);


  useEffect(() => {
    const getPokemones = async () => {
      let endpoint = "https://pokeapi.co/api/v2/pokemon";
      let pokemones = await axios(endpoint);
      setPokemones(pokemones.data.results);
      setCargando(false);
    }
    getPokemones();
  }, [])

  return (
    <View style={misEstilos.contenedor}>
      <View style={misEstilos.titulo}>
        <Text>ALSLKA</Text>
      </View>
      {
        cargando === false ?
          <ScrollView style={misEstilos.cardsContainerScroll}
            contentContainerStyle={misEstilos.cardsContainer} >
            {
              pokemones.map(pokemon => {
                return (<PokeCard key={pokemon.name}
                  pokemon={pokemon} />)
              })
            }
          </ScrollView>
          : null
      }
    </View>
  )
}

export default PokeHome
