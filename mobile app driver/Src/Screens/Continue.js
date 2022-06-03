import React, { useState, useEffect } from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const Continue = () => {
    const navigation = useNavigation(); 

    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null); 
    const [isChecked, setChecked] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [6, 4],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };

    const pickImage2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [6, 4],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
        setImage2(result.uri);
        }
    };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Ghana Card', value: 'item1'},
    {label: 'Voters ID Card', value: 'item2'},
    {label: 'Passport', value: 'item3'},
    {label: 'NHIS Card', value: 'item4'}
  ]);
    
  return (
    <SafeAreaView style ={styles.container}>
    
<View><Text style={{fontSize:30, color:"#003838",marginBottom:20}}> Document Upload</Text></View>

     <View style = {{alignSelf: 'center', top: 40}}>    
        <DropDownPicker
            style = {{alignSelf:"center", width: 380, textAlign: "center", borderWidth: 0, backgroundColor:"burlywood", 
                      fontWeight: "bold",borderRadius:10, fontSize:20, marginBottom: 1}}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeItem={item => console.log(item.label, item.value)}
            placeholder="Select ID Type"
        />

        <TouchableOpacity onPress={pickImage}
        style = {{backgroundColor: "teal", padding:12, paddingHorizontal: 35, borderRadius: 10, alignItems: "center",  marginBottom:5}}>
        <Text style={{color:"white", fontSize:15,}}>Click to upload a copy of your ID</Text> 
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={{ width: 380, height: 150, alignSelf: "center", marginBottom:40 }} />}  
        
        <TouchableOpacity onPress={pickImage2}
        style = {{backgroundColor: "teal", padding:12, paddingHorizontal: 35, borderRadius: 10, alignItems: "center", marginBottom: 5}}>
        <Text style={{color:"white", fontSize:15,}}>Click to upload a copy of Driver's Liscense</Text> 
        </TouchableOpacity>
        {image2 && <Image source={{ uri: image2 }} style={{ width: 380, height: 150, alignSelf:"center" }} />}

        </View>

        <View style={styles2.container}>
            <View style={styles2.section}>
                <Checkbox style={styles2.checkbox} value={isChecked}
                onValueChange={setChecked} color={isChecked ? 'teal' : undefined}/>
            <Text style={styles2.paragraph}>I have read and agreed to the terms and conditions</Text>
            </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom:1}}>
        <TouchableOpacity disabled= {!isChecked} onPress={() =>{navigation.navigate("Home")}}
                style={{backgroundColor:"coral", borderRadius:10, alignItems: "center", justifyContent: "center", width:200, height: 50, alignSelf:"center"}}>  
                <Text style={{fontSize:23, color:"white"}}>Finish</Text>  
                </TouchableOpacity>

        </View>
    </SafeAreaView>

  );
}

export default Continue;

const styles = StyleSheet.create({
  container: {
  flex: 2,
  backgroundColor: "white",
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  paddingTop: 50
},

  header: {
      flex: 1,
  },

  footer: {
      flex: 1,
      alignSelf: "center",
      height:800,
      width:50,
      marginRight:50
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    padding: 15,
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  paragraph: {
    fontSize: 15,
    color: "brown",
    marginTop: 50
  },

  checkbox: {
    margin: 2,
    marginTop: 50
  },
});