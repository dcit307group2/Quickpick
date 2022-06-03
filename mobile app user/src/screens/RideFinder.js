import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeMap from '../components/HomeMap';
import RideMap from '../components/RideMap';
import Icon from 'react-native-vector-icons/Ionicons';
import AppLoader from '../components/AppLoader';

const RideFinder = () => {

  return (
      <>
        <View style={{backgroundColor: "white", flex: 1}}>
            <View>
                <RideMap/>
            </View>

            <View style={{flexDirection: "row", alignItems: "center", top: 20, marginVertical: 10, left: 20}}>
                <Icon name={'location'} size={20} color='red' />
                <Text style={{
                    fontFamily: "Raleway-Bold", 
                    fontSize: 18, 
                    color: "white", 
                    borderColor: "white", 
                    borderWidth: 1, 
                    padding: 10, 
                    borderRadius: 10,
                    width: '80%',
                    backgroundColor: "teal",
                    }}>
                    Pent Hostel Block B
                </Text>
            </View>

            <View style={{flexDirection: "row", alignItems: "center", top: 20, marginVertical: 10, left: 20}}>
                <Icon name={'flag'} size={20} color='green' />
                <Text style={{
                    fontFamily: "Raleway-Bold", 
                    fontSize: 18, 
                    color: "white", 
                    borderColor: "white", 
                    borderWidth: 1, 
                    padding: 10, 
                    borderRadius: 10,
                    width: '80%',
                    backgroundColor: "teal",
                    }}>
                    T F Hostels
                </Text>
            </View>
            <AppLoader/>
        </View>
    </>
  )
}

export default RideFinder;

