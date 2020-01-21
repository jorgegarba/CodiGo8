import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PokeHome from '../screens/PokeHome';
import PokeInfo from '../screens/PokeInfo';

const PokedexStackNavigator = createStackNavigator(
  {
    PokeHomeScreen: {
      screen: PokeHome
    },
    PokeInfoScreen: {
      screen: PokeInfo
    }
  },
  {
    initialRouteName: 'PokeHomeScreen'
  }
);

export default createAppContainer(PokedexStackNavigator);