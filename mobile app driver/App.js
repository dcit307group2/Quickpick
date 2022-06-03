import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Src/Screens/StackNav';
import AuthStack from './Src/Screens/Auth/AuthStack';

import firebase from 'firebase/app';
import 'firebase/auth';

  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return(
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