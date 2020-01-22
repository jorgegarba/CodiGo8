import React from 'react'
import {
  View, Text, StyleSheet,
  Dimensions, TouchableOpacity, ActivityIndicator
} from 'react-native'
import { Image } from 'react-native-elements';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { withNavigation } from 'react-navigation';

const misEstilos = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: '#FB6D6C',
    width: (Dimensions.get('window').width / 2) - 20,
    margin: 10,
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  viewNombre: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  viewInfo: {
    flex: 2,
    flexDirection: 'row'
  },
  textoNombre: {
    color: 'white',
    fontFamily: 'roboto-black',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 15
  },
  infoDerecha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  infoIzquierda: {
    flex: 1
  },
  imagen: {
    flex: 1,
    aspectRatio: 1,
  }
})

const PokeCard = (props) => {

  let { name, url } = props.pokemon;

  const [fuenteCargada, setFuenteCargada] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const cargarFuentes = async () => {
      await Font.loadAsync({ 'roboto-black': require('./../../assets/fonts/Roboto-Black.ttf') });
      setFuenteCargada(true);
    }
    const getInfo = async () => {
      let infoTmp = await axios(url);
      setInfo(infoTmp.data);
    }
    cargarFuentes();
    getInfo();
  }, []);

  const goInfo = () => {
    props.navigation.navigate('PokeInfoScreen', { pokemon: { ...info } })
  }

  return (
    <TouchableOpacity onPress={goInfo}>
      <View style={misEstilos.card}>
        <View style={misEstilos.viewNombre}>
          {
            fuenteCargada ?
              <Text style={misEstilos.textoNombre}>
                {name}
              </Text> :
              null
          }
        </View>
        <View style={misEstilos.viewInfo}>
          <View style={misEstilos.infoIzquierda}>

          </View>
          <View style={misEstilos.infoDerecha}>
            {
              info.sprites ?
                <Image
                  style={misEstilos.imagen}
                  source={{
                    uri: info.sprites.front_default
                  }}
                  PlaceholderContent={<ActivityIndicator size={'large'}
                    color={'#FB6D6C'} />} />
                :
                null
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default withNavigation(PokeCard)
