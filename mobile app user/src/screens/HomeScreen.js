import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import HomeMap from '../components/HomeMap';
import PickupSearchBar from '../components/PickupSearchBar';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.replace('LoginScreen');
    })
    .catch(error => alert(error.message))
}

  return (
    <View>

      <TouchableOpacity style={{zIndex: 1}} onPress={() => navigation.navigate("Settings")}>
        <View style={styles.iconContainer}>
          <Icon name={'person'} size={25} color={'white'}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{zIndex: 1, top: 60}} onPress={handleSignOut}>
        <View style={styles.iconContainer}>
          <Icon name={'log-out-outline'} size={25} color={'white'}/>
        </View>
      </TouchableOpacity>

      <HomeMap />
      <PickupSearchBar />

    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
    left: 10,
    top: 10,
    position: "absolute",
    alignItems:"center",
    top: 20
  },
})
