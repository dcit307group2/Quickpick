import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';
import Settings from './Settings';

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <View style={{flex: 1}}>
        <Stack.Navigator 
        initialRouteName='WelcomeScreen'
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    </View>
  );
};


export default AuthStack;