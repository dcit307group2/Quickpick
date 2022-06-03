import 'react-native-gesture-handler';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useRef, useMemo, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo' ;
import { useNavigation } from '@react-navigation/native';
  
const PickupSearchBar = () => {  
 const navigation = useNavigation();

  return (
    <View style={{backgroundColor: "teal"}}>
      <View style={styles.inputBox}>
        <TouchableOpacity onPress={() => navigation.navigate("DropoffSearch")} >
          <Text style={styles.inputText}>Enter package pickup location</Text>           
        </TouchableOpacity> 
      </View>

      <View style={styles.row}> 
        <View style={styles.iconContainer}>
          <Icon name={'time'} size={20} color={'teal'} /> 
        </View>
        <Text style={styles.destinationText}>TF Hostels</Text>
      </View>

      <View style={styles.row2}> 
        <View style={styles.iconContainer2}>
          <Icon2 name={'home'} size={20} color={'teal'} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>    
  );
};

export default PickupSearchBar;

const styles = StyleSheet.create({
    inputBox: {
      backgroundColor: "white",
      margin: 10,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 5,
      height:50
    },

    inputText: {
      fontSize: 20,
      color: "teal",
      fontFamily: "Raleway-SemiBold",
      alignItems: "center",
    },

    row: {
      flexDirection: "row",
      padding: 20,
      alignItems: "center",
      borderBottomWidth: 0.8,
      borderColor: "white" 
    },

    row2: {
      flexDirection: "row",
      padding: 20,
      alignItems: "center",
    },
    
    iconContainer: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 50,
      alignItems: "center"
    },

    iconContainer2: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 50,
      alignItems: "center"
    },

    destinationText: {
      marginLeft: 20,
      fontSize: 18,
      fontFamily: "Raleway-Bold",
      color: "white"
    }
});