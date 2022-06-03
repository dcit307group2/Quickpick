import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Profile from './Profile';
import Continue from './Continue';
import Login from './Auth/Login';


const Stack = createStackNavigator();

const   StackNav = ({}) => {
 return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Home'}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Continue' component={Continue} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
 )
 }

 export default StackNav;