import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const RideMap = ({ origin, destination }) => {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyDXad8EdmIrRRRf4ihKuWVlRrWcC5wSGus';
    const originLoc = {
      latitude: 5.6587,
      longitude: -0.1818
    }

    const destinationLoc = {
      latitude: 5.6664,
      longitude:  -0.1821,
    }

  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}  
        initialRegion={{
          latitude: 5.6587,
          longitude: -0.1818,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025,
        }}
      >
          <MapViewDirections 
              origin={originLoc}
              destination={destinationLoc}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={4}
              strokeColor="teal"
          />
          <Marker 
            coordinate={originLoc}
            title={'Origin'}
          />
          <Marker 
            coordinate={destinationLoc}
            title={'Destination'}
          />
      </MapView>
    </View>
  );
};

export default RideMap;

const styles = StyleSheet.create({
  map: {
    height: SCREEN_HEIGHT-300,
    width: "100%"
  },
})