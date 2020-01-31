import React, { Component } from "react";
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
  ScrollView, Dimensions
} from "react-native";
import InputField from "./InputField";
import NextArrowButton from "./NextArrowButton";
import Loader from "../../components/Loader";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (campo, valor) => {
    this.setState({
      [campo]: valor
    })
  }

  handleSubmit = () => {
    console.log("submit");
    this.props.loggin(this.state.email, this.state.password);
  }


  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <Loader
          cargando={this.props.cargando} />
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Pokedex - Login</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={"white"}
              textColor={"white"}
              borderBottomColor={"white"}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
              handleChange={this.handleChange}
              campo={"email"}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={"white"}
              textColor={"white"}
              borderBottomColor={"white"}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
              handleChange={this.handleChange}
              campo={"password"}

            />
          </ScrollView>
          <NextArrowButton handleSubmit={this.handleSubmit} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FB6D6C",
    padding: 10
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginHeader: {
    fontSize: 28,
    color: "white",
    fontWeight: "300",
    marginBottom: 40
  }
});