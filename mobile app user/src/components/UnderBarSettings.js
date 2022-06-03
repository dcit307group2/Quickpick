import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

const SCREEN_WIDTH = Dimensions.get('window').width;

const UnderBarSettings = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
      </View>  

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Clicked!')}
        >
          <Text style={styles.buttonText}>
            Become a QuickPick courier today! 
          </Text>

          <Icon name={'arrow-forward-circle'} size={30} color={'white'} style={{top: -2, left: -10}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UnderBarSettings

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 20,
  },

  button: {
    backgroundColor: 'coral',
    padding: 10,
    borderRadius: 10,
    width: 0.95 * SCREEN_WIDTH,
    alignSelf: "center",
    alignItems: "center",
    height: 60,
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: "center",
    fontFamily: "Poppins-Bold",
    left: 5
  },
})