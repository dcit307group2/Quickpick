import { View, Text } from 'react-native';
import React from 'react';
import RouteMap from '../components/RouteMap';
import CourierTypes from '../components/CourierTypes';
import { useRoute } from '@react-navigation/native';

const CourierConfirmation = () => {
  const route = useRoute();

  console.log(route.params);
  const {pickupPlace, destinationPlace} = route.params

  return (
    <View>
      <RouteMap origin={pickupPlace} destination={destinationPlace} />
      <CourierTypes />
    </View>
  )
}

export default CourierConfirmation;