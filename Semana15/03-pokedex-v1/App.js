import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PokedexStackNavigator from './src/navigations/PokedexStackNavigator';
import PokeDrawerNavigator from './src/navigations/PokeDrawerNavigator';
import { AuthService } from './src/servicios/Auth';
import PokeLogin from './src/screens/PokeLogin';
import Login from './src/screens/loggin2/Login';


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

  const loggin = (email, password) => {
    _sAuth.iniciarSesion(email, password)
      .then(rpta => {
        console.log(rpta);
        if (rpta.ok) {
          setIsLogged(true);
        } else {
          // error
        }
      })

  }

  const logout = () => {
    console.log("Cerrando sesion");
    _sAuth.cerrarSesion();
    setIsLogged(false);
  }

  // return (

  //   isLogged ?
  //     <View style={misEstilos.contenedor} >
  //       <PokeDrawerNavigator screenProps={{
  //         logout: logout
  //       }} />
  //     </View > :
  //     <View style={misEstilos.contenedor}>
  //       <PokeLogin loggin={loggin} />
  //     </View>
  // )

  return (<Login></Login>)
}

export default App
