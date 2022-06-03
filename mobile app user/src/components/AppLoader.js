import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const AppLoader = () => {
  return (
    <View style={styles.container}>
      <LottieView
          source={require('../assets/images/search.json')}
          autoPlay loop
      />
    </View>
  )
}

export default AppLoader;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        top: 10
    },
})