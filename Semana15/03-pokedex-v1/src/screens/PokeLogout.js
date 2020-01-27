import React from 'react'
import { View, Text } from 'react-native'

const PokeLogout = (props) => {
  props.screenProps.logout();
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default PokeLogout
