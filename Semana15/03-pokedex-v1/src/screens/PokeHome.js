import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import axios from 'axios';
import PokeCard from '../components/PokeCard';


const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  titulo: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoTitulo: {
    flex: 1,
    marginLeft: 20,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#3A3F44'
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardsContainerScroll: {
    flex: 1
  }
})
const PokeHome = (props) => {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);


  useEffect(() => {
    const getPokemones = async () => {
      let endpoint = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
      let listaPokemones = await axios(endpoint);
      setPokemones(listaPokemones.data.results);
      setCargando(false);
    }
    getPokemones();
  }, [])

  return (
    <View style={misEstilos.contenedor}>
      <View style={misEstilos.titulo}>
        <Text style={misEstilos.textoTitulo}>POKEDEX</Text>
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
