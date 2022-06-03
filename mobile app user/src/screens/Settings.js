import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { auth } from '../../firebase';
import TopBarSettings from '../components/TopBarSettings';
import UnderBarSettings from '../components/UnderBarSettings';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Settings = () => {
  return (
      <View>
        <View style={styles.container}>
            <TopBarSettings/>
        </View>

        <View style={styles.container2}>
            <UnderBarSettings/>
        </View>
    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT/2,
        backgroundColor: 'red',
    },

    container2: {
        height: SCREEN_HEIGHT/2,
        backgroundColor: 'white',
    },
})