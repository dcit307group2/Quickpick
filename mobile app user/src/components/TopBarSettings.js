import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsButton from './SettingsButton';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const TopBarSettings = ({}) => {
  return (
      <View>
        <View style={styles.customerInfoContainer}>
            <Icon name={'person-circle'} size={80} color={'white'} style={styles.icon}/>

            <Text style={styles.userName}> Kofi Mantey </Text>

            <View style={{flexDirection: "row"}}>
                <Icon name={'star'} size={20} color={'white'} style={styles.star} />
                <Text style={[styles.userName, {fontSize: 15, color: "white"}]}> 4. 5</Text>
            </View>
        </View>
            
        <View style={styles.buttonsContainer}>
            <SettingsButton
                iconName="help-circle"
                sectionText="Help"
                navScreen="Help"
            />

            <SettingsButton
                iconName="card"
                sectionText="Payment"
                navScreen="Payment"
            />

            <SettingsButton
                iconName="time"
                sectionText="Trip History"
                navScreen="TripHistory"
            />
        </View>
       </View>
  )
}

export default TopBarSettings

const styles = StyleSheet.create({
    customerInfoContainer: {
        height: (SCREEN_HEIGHT/2) /2,
        backgroundColor: "black",
    },

    buttonsContainer: {
        height: (SCREEN_HEIGHT/2) /2,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
    },

    iconContainer: {
        backgroundColor: "teal",
        padding: 10,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 80,
        position: "absolute",
        left: "75%",
        top: 30,
      },

    icon: {
        position: "absolute",
        left: "75%",
        top: 35,
    },

      userName: {
        top: 50,
        left: 20,  
        fontSize: 30,
        fontFamily: "Poppins-Bold",
        color: "white"
      },

      star: {
        top: 50,
        marginLeft: 25,
      },
})