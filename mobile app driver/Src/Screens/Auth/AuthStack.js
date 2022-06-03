import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';
import Continue from '../Continue';
import Home from '../Home';

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <View style={{flex: 1}}>
        <Stack.Navigator 
        initialRouteName='Welcome'
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name='Continue' component={Continue} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    </View>
  );
};


export default AuthStack;