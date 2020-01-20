import { Dimensions } from 'react-native';


export default class Dimensiones {

  static get getAncho() {
    let ancho = Dimensions.get("window").width;
    return ancho;
  }
  
}
