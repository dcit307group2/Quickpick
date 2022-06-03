import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NewOrder = ({newOrder, onAccept, onDecline, duration, distance}) => {


 return (
     <View style={styles.root}>
        <View style={styles.popContainer}>

            <View style={{alignSelf: "center", flexDirection: 'row', paddingHorizontal: 40, marginTop: 5}}>
                <Ionicons name={'person-circle'} size={70} color={"skyblue"}/>
            </View>

            <View style={{alignSelf: "center", flexDirection: 'row'}}>
                <Ionicons name={'md-star-sharp'} size={15} color={"teal"} />
                <Ionicons name={'md-star-sharp'} size={15} color={"teal"} />
                <Ionicons name={'md-star-sharp'} size={15} color={"teal"} />
                <Ionicons name={'md-star-sharp'} size={15} color={"teal"} />
                <Ionicons name={'md-star-half-sharp'} size={15} color={"teal"} />
            </View>

            <View style={{alignItems: "center", flexDirection: 'column', marginTop: 15}}>
                <Text style={{color: 'white', fontSize: 30}}>{duration} MIN</Text>
                <Text style={{color: 'grey', fontSize: 18}}>{distance} Miles Away</Text>
            </View>

            <View style={{justifyContent: "space-between", flexDirection: 'row', paddingHorizontal: 50, paddingVertical: 13}}>
            <TouchableOpacity  onPress={(onDecline)}>
                <MaterialIcons name={'cancel'} size={50} color={"brown"} />
            </TouchableOpacity>

            <TouchableOpacity  onPress={(onAccept)}>
                <Ionicons name={'checkmark-circle'} size={50} color={"#39FF14"} />
            </TouchableOpacity>
            </View>
            </View>
     </View>
 )
 }

 export default NewOrder;

 const styles = StyleSheet.create({
    root: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        padding: 15,
        height: '100%',
        backgroundColor: '#00000075'
    },
  
    popContainer: {
        top: 480,
        height: 290,     
        backgroundColor: "#002e2e", 
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
 }) 