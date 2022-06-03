import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';

const SearchResults = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === "Home" 
        ? <Icon2 name="home" size={18} color="white" /> 
        : <Icon name="location-sharp" size={18} color="white" /> 
        
        &&
        
        data.description === "Work" 
        ? <Icon2 name="briefcase" size={18} color="white" /> 
        : <Icon name="location-sharp" size={18} color="white" />
        } 
      </View>

      
      <Text style={styles.searchResults}>
          {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        letterSpacing: 0.05,
        marginVertical: 8,
    },

    iconContainer: {
        backgroundColor: "teal",
        padding: 8,
        margin: 5,
        borderRadius: 50,
        alignItems: "center",
      },

      searchResults: {
          fontFamily: "Raleway-SemiBold",
          fontSize: 15,
          marginLeft: 5,
          color: "black"
      }
})