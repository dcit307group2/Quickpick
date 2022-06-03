import 'react-native-gesture-handler';

import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchResults from '../components/SearchResults';
import { useNavigation } from '@react-navigation/native';

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 5.6587, lng: -0.1818 } },
};

const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 5.6587, lng: -0.1818 } },
};

const DropoffSearch = () => {
    const navigation = useNavigation();
    const [pickupPlace, setPickupPlace] = useState (null);
    const [destinationPlace, setDestinationPlace] = useState (null);

    const checkNav = () => {
        if (pickupPlace && destinationPlace) {
            navigation.navigate("CourierConfirmation", {
                pickupPlace,
                destinationPlace
            })
        }
    }
        
    useEffect( () => {
        checkNav();
    }, [pickupPlace, destinationPlace]);

  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete 
          placeholder='Enter package pickup location'
          suppressDefaultStyles
          enablePoweredByContainer={false}
          currentLocation={true}
          currentLocationLabel= "Current Location"
          enableHighAccuracyLocation={true}
          isRowScrollable={true}
          onPress={(data, details = null) => {
              setPickupPlace({data, details});
          }}
          styles={{
              textInput: styles.textInput,
              container: {
                  position: "absolute",
                  top: 25,
                  left: 10,
                  right: 10,
              },
              listView: {
                  position: "absolute",
                    top: 125,
              },
              separator: {
                  backgroundColor: "#d3d3d3",
                  height: 1.5
              },
          }}
          fetchDetails
          query={{
              key: 'AIzaSyDXad8EdmIrRRRf4ihKuWVlRrWcC5wSGus',
              language: "en",
              components: "country:gh",
          }}
          renderRow={(data) => <SearchResults data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
      />

      <GooglePlacesAutocomplete 
          placeholder='Enter package dropoff location'
          enablePoweredByContainer={false}
          suppressDefaultStyles
          enableHighAccuracyLocation={true}
          isRowScrollable={true}
          onPress={(data, details = null) => {
              setDestinationPlace({data, details});
          }}
          styles={{
              textInput: styles.textInput,
              container: {
                  position: "absolute",
                  top: 85,
                  left: 10,
                  right: 10,
              },
              separator: {
                  backgroundColor: "#eee",
                  height: 2
              },
          }}
          fetchDetails
          query={{
              key: 'AIzaSyDXad8EdmIrRRRf4ihKuWVlRrWcC5wSGus',
              language: "en",
              components: "country:gh",
          }}
          renderRow={(data) => <SearchResults data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
      />

      <View style={styles.iconContainer}>  
        <View style={styles.location}>
            <Icon name={'location-sharp'} size={15} color={'red'} />
        </View>

        <View style={styles.arrow} />

        <View style={styles.flag}>
            <Icon name={'flag'} size={15} color={'green'} />
        </View>
      </View>

    </SafeAreaView>
  );
};

export default DropoffSearch;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
        flex: 1,
    },

    textInput: {
        padding: 10,
        backgroundColor: "teal",
        borderWidth:1,
        borderColor:"teal",
        marginVertical: 10,
        fontFamily: "Raleway-SemiBold",
        marginLeft: 20,
        height: 50,
        borderRadius: 5,
        fontSize: 16,
        color: "white",
    },

    iconContainer: {
        flexDirection: "column",
        justifyContent: "center",
    },

    flag: {
        top: 61
    },

    location: {
        top:45
    },

    arrow: {
        width: 1,
        height: 30,
        top: 50,
        backgroundColor: "black",
        left: 7,
    }
})