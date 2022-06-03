import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const CarOption = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('../assets/images/car.jpeg')} 
     />

      <View style={styles.middleComponent}>
        <Text style={styles.courierType}>
            Car
        </Text>

        <Text style={{fontFamily:"Raleway-SemiBold", fontSize: 16, color: "black"}}>
            Dropoff time is 7:30PM
        </Text>
      </View>

      <View style={styles.rightComponent}>
          <Icon name={'cash'} size={24} color={'green'} />
          <Text style={styles.pricing}>
              ₵20
          </Text>
      </View>

    </View>
  );
};

export default CarOption;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    
    image: {
        height: 70,
        width: 70,
        resizeMode: "contain",
    },

    middleComponent: {
        flex: 1,
        marginHorizontal: 10,
        marginLeft: 30,
    },

    rightComponent: {
        width: 80,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    courierType: {
        fontFamily: "Raleway-Bold",
        fontSize: 20,
        marginBottom: 5,
        color:"black"
    },

    pricing: {
        fontSize: 18,
        marginLeft: 5,
        fontFamily: "JetBrainsMono-Bold",
        color:"black"
    },
})