import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: "#eee"}}>
      <View style={{height: SCREEN_HEIGHT/2, backgroundColor: "white"}}>
        <Image source={require('../assets/images/welcomescreen2.jpg')} style={styles.image} />
      </View>

      <View style={{height: (SCREEN_HEIGHT/2)-((SCREEN_HEIGHT/2)/4), backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
        
        <View style={{flexDirection: "row", alignSelf: "center"}}>
          <Text style={{fontFamily: "Poppins-Bold", fontSize: 50, color: "coral",}}>
            Quick
          </Text>

          <Text style={{fontFamily: "Poppins-Bold", fontSize: 50, color: "teal"}}>
            Pick
          </Text>
          
          <Image source={require('../assets/images/package.png')} style={[styles.emoji, {top:7.5, left:10}]} />

        </View>

        <View style={styles.textemoji}>
          <Text style={styles.text1}>
            Quick and Affordable 
          </Text>
        </View>

        <View style={styles.textemoji}>
          <Text style={[styles.text1, {fontSize: 20, fontFamily: "Poppins-Regular", color: "grey"}]}>
            "We deliver for you,
          </Text>
        </View>

        <View style={styles.textemoji}>
          <Text style={[styles.text1, {fontSize: 20, fontFamily: "Raleway-Regular", color: "grey"}]}>
            We deliver to you"
          </Text>
        </View>

        <View style={styles.icons}>
          <Icon name={'snapchat'} size={30} color={'black'} style={{right: 20}} />
          <Icon2 name={'instagram-with-circle'} size={30} color={'black'} />
          <Icon2 name={'facebook-with-circle'} size={30} color={'black'} style={{left: 20}} />
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={styles.buttonsText}>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttons, {backgroundColor: "coral"}]} onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.buttonsText}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: "95%",
    top: 5,
    resizeMode: "contain",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: "center",
  },

  text1: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
    color: "teal", 
    alignSelf: "center",
  },

  textemoji:{
    flexDirection: "column",
  },

  emoji: {
    height: 60,
    width: 60,
  },

  buttonsContainer: {
    flexDirection: "row",
    height: (SCREEN_HEIGHT/2)/4, 
    backgroundColor: "white",
    justifyContent: "space-evenly"
  },

  buttons: {
    height: 50,
    width: '45%',
    backgroundColor: "teal",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10
  },

  buttonsText: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "white"
  },

  icons: {
    flexDirection: "row",
    top: 21,
    justifyContent: "space-evenly",
  },
})