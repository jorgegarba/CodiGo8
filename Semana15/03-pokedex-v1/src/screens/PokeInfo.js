import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const PokeInfo = (props) => {

  // info => objeto que nos llega por parametros
  // en la navegación, desde PokeHome
  let info = props.navigation.getParam('pokemon');
  console.log(info);

  return (
    <View>
      <Text>
        ESTA ES LA PANTALLA DE INFORMACION DE {info.name}
      </Text>
    </View>
  )
}

export default PokeInfo
