import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View
} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default class Map extends Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
       >
       </MapView>
      </View>
    );
  }
}