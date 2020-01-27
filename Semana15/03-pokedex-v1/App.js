import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PokedexStackNavigator from './src/navigations/PokedexStackNavigator';
import PokeDrawerNavigator from './src/navigations/PokeDrawerNavigator';
import { AuthService } from './src/servicios/Auth';
import PokeLogin from './src/screens/PokeLogin';


const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1
  }
})

const App = () => {

  let _sAuth = new AuthService();

  const [isLogged, setIsLogged] = useState(false);


  useEffect(() => {
    if (_sAuth.isLogged()) {
      setIsLogged(true);
    }
  }, []);

  return (

    isLogged ?
      <View style={misEstilos.contenedor} >
        <PokeDrawerNavigator />
      </View > :
      <View style={misEstilos.contenedor}>
        <PokeLogin />
      </View>
  )
}

export default App
