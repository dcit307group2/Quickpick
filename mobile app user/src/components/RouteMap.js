import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const RouteMap = ({ origin, destination }) => {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyDXad8EdmIrRRRf4ihKuWVlRrWcC5wSGus';
    const originLoc = {
      latitude: origin.details.geometry.location.lat,
      longitude: origin.details.geometry.location.lng
    }

    const destinationLoc = {
      latitude: destination.details.geometry.location.lat,
      longitude: destination.details.geometry.location.lng,
    }

  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}  
        initialRegion={{
          latitude: origin.details.geometry.location.lat,
          longitude: origin.details.geometry.location.lng,
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

export default RouteMap;

const styles = StyleSheet.create({
  map: {
    height: SCREEN_HEIGHT-300,
    width: "100%"
  },
})