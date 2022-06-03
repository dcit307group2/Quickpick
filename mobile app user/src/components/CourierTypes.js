import { Pressable, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import CarOption from './CarOption';
import BikeOption from './BikeOption';
import { useNavigation } from '@react-navigation/native';

const CourierTypes = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor:"white"}}>
      <CarOption />
      <BikeOption />

      <Pressable onPress={() => navigation.navigate("RideFinder")} style={{
        backgroundColor: "teal",
        padding: 10,
        margin: 10,
        alignItems: "center",
        borderRadius: 5
      }}>
        <Text style={styles.confirmDelivery}>
          Confirm delivery
        </Text>
      </Pressable>
    </View>
  );
};

export default CourierTypes;

const styles = StyleSheet.create({
  confirmDelivery: {
    color: "white", 
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Raleway-Bold"
  },
});
