import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import PokePerfil from '../screens/PokePerfil';
import PokedexStackNavigator from './PokedexStackNavigator';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

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
    }
  },
  {
    initialRouteName: 'PokedexScreen',
    contentComponent: CustomDrawer,
    drawerBackgroundColor: '#C0FFF0'
  }
);

export default createAppContainer(PokeDrawerNavigator);