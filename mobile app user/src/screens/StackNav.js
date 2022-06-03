import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DropoffSearch from './DropoffSearch';
import CourierConfirmation from './CourierConfirmation';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ForgotPassword from './ForgotPassword';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import Help from './Profile/Help';
import Payment from './Profile/Payment';
import TripHistory from './Profile/TripHistory';
import RideFinder from './RideFinder'; 

const Stack = createStackNavigator();

const StackNav = () => {

  return (
    <View style={{flex: 1}}>
        <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="DropoffSearch" component={DropoffSearch} />
          <Stack.Screen name="CourierConfirmation" component={CourierConfirmation} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="TripHistory" component={TripHistory} />
          <Stack.Screen name="RideFinder" component={RideFinder} />
        </Stack.Navigator>
    </View>
  );
};


export default StackNav;