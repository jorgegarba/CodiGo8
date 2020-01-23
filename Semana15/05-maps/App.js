import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedbackBase } from "react-native";
import MapView from "react-native-maps";
import { Header } from "react-native-elements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      id: 0,
    };
  }
  markerClick = () => {
    console.log("Marker fue clickeado");
  };

  onMapPress(e) { 
    let objMarker = {
      id: this.state.id,
      coordinate: {
        longitude: e.nativeEvent.coordinate.longitude,
        latitude: e.nativeEvent.coordinate.latitude
      }
    };

    this.setState({
      markers: [...this.state.markers, objMarker],
      id:this.state.id + 1
    });
    console.log(this.state.markers);

    
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header
          centerComponent={{ text: "MapsApp", style: { color: "#fff" } }}
        />
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude:-16.4320659,
            longitude:-71.5174103,
            latitudeDelta:0.0,
            longitudeDelta:0.0
          }}
          onPress={e => this.onMapPress(e)}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.coordinate}
            >
              <MapView.Callout>
                <View>
                  <Text>Hiciste Click en el Marcador</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}