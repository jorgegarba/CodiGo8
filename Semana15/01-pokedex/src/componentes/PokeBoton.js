import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import pokebola from './../../assets/pokemon.png';
import Dimensiones from '../services/dimensiones';

const PokeBoton = () => {
  return (
    <TouchableOpacity>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(251,109,106,1)',
        width: Dimensiones.getAncho / 3,
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 23,
          marginLeft: 5
        }}>
          Click
      </Text>
        <Image source={pokebola} style={{ marginLeft: 35, width: 40, height: 40 }} />
      </View>
    </TouchableOpacity>
  )
}

export default PokeBoton
