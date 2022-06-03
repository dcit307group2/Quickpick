import 'react-native-gesture-handler';
import { View, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import StackNav from './src/screens/StackNav';
import AuthStack from './src/screens/AuthStack';

import firebase from 'firebase/app';
import 'firebase/auth';

navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const androidPermissions = async () => {
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 
            'QuickPick needs access to your location ' +
            'so you can find the nearest courier.',
          buttonNeutral: 'Remind Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
      androidPermissions();
  }, [])

  const firebaseConfig = {
    apiKey: "AIzaSyDa2789RXNJ2-yhGZhvPldbC1hXls8McAE",
    authDomain: "quickpick-auth.firebaseapp.com",
    projectId: "quickpick-auth",
    storageBucket: "quickpick-auth.appspot.com",
    messagingSenderId: "384219604746",
    appId: "1:384219604746:web:ad4f51aa1e3ab93e523cf3"
  };

  // Initialize Firebase
  let app;
  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app()
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });

    return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {isLoggedIn ? 
          <StackNav /> 
        :
        <AuthStack />}
      </NavigationContainer>
    </View>
  );
};


export default App;