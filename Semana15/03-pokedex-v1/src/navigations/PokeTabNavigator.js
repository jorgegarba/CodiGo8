import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import PokeAboutTab from '../screens/PokeAboutTab';
import PokeStatsTab from '../screens/PokeStatsTab';
import PokeEvolucionTab from '../screens/PokeEvolucionTab';

const PokeTabNavigator = createMaterialTopTabNavigator(
  {
    PokeAboutTabScreen: {
      screen: PokeAboutTab,
      navigationOptions: {
        title: 'Información'
      }
    },
    PokeStatsTabScreen: {
      screen: PokeStatsTab,
      navigationOptions: {
        title: 'Estadísticas',
      }
    },
    PokeEvolucionTabScreen: {
      screen: PokeEvolucionTab,
      navigationOptions: {
        title: 'Evoluciones',
      },
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#666',
      inactiveTintColor: '#ccc',
      style: {
        backgroundColor: 'transparent',
      },
      indicatorStyle: {        
        backgroundColor:'#ccc',
      }
    },
  }
)

export default createAppContainer(PokeTabNavigator);