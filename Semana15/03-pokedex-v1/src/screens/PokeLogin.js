import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { AuthService } from '../servicios/Auth';


const misEstilos = StyleSheet.create(
  {
    contenedor: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
)

export default class PokeLogin extends Component {

  _sAuthService = new AuthService();

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  loggin = () => {
    let { email, password } = this.state;

    this.props.loggin(email, password);

  }

  render() {
    return (
      <View style={misEstilos.contenedor}>
        <Input
          placeholder='Ingrese su correo'
          leftIcon={<Icon name='user'
            size={24}
            color='black'
          />}
          onChange={(e) => {
            this.setState({ email: e.nativeEvent.text })
          }}
          value={this.state.email}
        />
        <Input
          value={this.state.password}
          onChange={e => {
            this.setState({ password: e.nativeEvent.text })
          }}
          placeholder='Ingrese su password'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Button title={"Iniciar Sesion"}
          onPress={this.loggin} />
      </View>
    )
  }
}
