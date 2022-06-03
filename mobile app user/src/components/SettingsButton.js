import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const SettingsButton = ({iconName, sectionText, navScreen, ...rest }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{top: -50}}>

        <TouchableOpacity style={styles.container} onPress={() => alert(navScreen + ' clicked!')}>
          <Icon name={iconName} size={30} color='teal'/>
          <Text style={styles.sectionText}> 
            {sectionText} 
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default SettingsButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    height: 100,
    width: 110,
    backgroundColor: "white"
  },
  sectionText: {
    color: "teal",
    fontFamily: "Poppins-Bold",
    fontSize: 15,
  },
})