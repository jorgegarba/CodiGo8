import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import PokePerfil from '../screens/PokePerfil';
import PokedexStackNavigator from './PokedexStackNavigator';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import PokeLogout from '../screens/PokeLogout';

const PokeDrawerNavigator = createDrawerNavigator(
  {
    PokePerfilScreen: {
      screen: PokePerfil,
      navigationOptions: () => {
        return ({
          drawerLabel: 'Mi Perfil',
          drawerIcon: () => {
            return (<Icon name={'user'} />)
          }
        })
      }
    },
    PokedexScreen: {
      screen: PokedexStackNavigator,
      navigationOptions: () => {
        return ({
          drawerLabel: 'Mi Pokedex',
          drawerIcon: () => {
            return (<Icon name={'book'} />)
          }
        })
      }
    },
    PokeLogoutScreen: {
      screen: PokeLogout,
      navigationOptions: () => {
        return ({
          drawerLabel: 'Cerrar Sesión',
          drawerIcon: () => {
            return (<Icon name={'sign-out-alt'} />)
          }
        })
      }
    }
  },
  {
    initialRouteName: 'PokedexScreen',
    contentComponent: CustomDrawer,
    drawerBackgroundColor: '#C0FFF0'
  }
);

export default createAppContainer(PokeDrawerNavigator);