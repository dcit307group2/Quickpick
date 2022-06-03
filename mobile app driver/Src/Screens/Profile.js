import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

const   Profile = ({}) => {
const navigation = useNavigation();
const [image, setImage] = useState(null);

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


 return (
    <View>
        <ImageBackground source={require('../assets/images/back.jpg')} style={{height: '55%', width: '100%'}} >
        <TouchableOpacity onPress={pickImage} style={[{top: 30, alignSelf: "center", marginBottom: 20}]}>
            <Ionicons name={'person-circle'} size={200} color={"white"} />
            {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, alignSelf: "center", borderRadius: 90 }} />}  
        </TouchableOpacity>

            <View style = {{flexDirection: "row", justifyContent: "space-evenly", marginBottom: 1, alignItems: "center"}}>
                    <Text style={{fontSize: 25, color: "white"}}>Elsie Koshie Tetteh             </Text>
                    <Text style={{color: "white"}}><Ionicons name={'star-sharp'} size={20} color={"coral"} />4.3 Rating</Text>
            </View>
        </ImageBackground>

        <View style= {{backgroundColor: "white", top: -230, marginBottom: 20}}>
            <Text style={{top:10, marginBottom: 30, fontSize:17, paddingHorizontal: 10, color: "grey"}}><Ionicons name={'calendar-outline'} size={28} color={"#003838"} /> QuickPick driver for 3 months</Text>

            <Text style={{marginBottom: 10, fontSize:17, paddingHorizontal: 10, color: "grey"}}><Ionicons name={'ios-globe-outline'} size={29} color={"#003838"} /> Speak English and Twi</Text>

            <Text style={{marginTop: 10, fontSize:17, paddingHorizontal: 10, color: "grey"}}><Ionicons name={'ios-location-outline'} size={30} color={"#003838"} /> From the Greater Accra Region</Text>
            
            <Text style={{marginTop: 10, fontSize:17, paddingHorizontal: 10, color: "grey"}}><Ionicons name={'ios-information-circle-outline'} size={30} color={"#003838"} />  About me: I like to read</Text>
        
            <View style = {{marginTop: 25, flexDirection: "row", justifyContent: "space-evenly", marginBottom: 1, alignItems: "center"}}>
                <Text style = {{fontSize: 25, color: "#003838"}}>Achievments: </Text>
            </View>
            <View style = {{marginTop: 5, flexDirection: "row", justifyContent: "space-evenly", marginBottom: 1, alignItems: "center"}}>
                <View style = {{flexDirection: "column", alignItems: "center"}}>
                    <Ionicons name={'trophy'} size={55} color={"#003838"}/>
                    <Text style = {{flexDirection: "column"}}>100+ deliveries</Text>
                </View>

                <View style = {{flexDirection: "column", alignItems: "center"}}>
                    <Ionicons name={'happy-outline'} size={55} color={"#003838"}/>
                    <Text style = {{flexDirection: "column"}}>Friendly</Text>
                </View>

                <View style = {{flexDirection: "column", alignItems: "center"}}>
                    <Ionicons name={'shield-checkmark'} size={55} color={"#003838"}/>
                    <Text style = {{flexDirection: "column"}}>Secure deliveries</Text>
                </View>

                <View style = {{flexDirection: "column", alignItems: "center"}}>
                    <Ionicons name={'ios-car-sport-outline'} size={55} color={"#003838"}/>
                    <Text style = {{flexDirection: "column"}}>VIP driver</Text>
                </View>
            </View>

            <View style = {{backgroundColor: "burlywood", marginTop: 20}}>
                <Text style = {{fontSize: 25, marginBottom: 10, color: "teal"}}>Personal Information: </Text>
                <Text style = {{fontSize: 18, color: "#003830"}}><Text style = {{fontWeight: "bold", color: "teal"}}>Age: </Text>                     31</Text>
                <Text style = {{fontSize: 18, color: "#003830"}}><Text style = {{fontWeight: "bold", color: "teal"}}>Number: </Text>              0266250396</Text>
                <Text style = {{fontSize: 18, color: "#003830"}}><Text style = {{fontWeight: "bold", color: "teal"}}>Vehicle type: </Text>       KIA Picanto (Car)</Text>
                <Text style = {{fontSize: 18, color: "#003830"}}><Text style = {{fontWeight: "bold", color: "teal"}}>Vehicle Number: </Text>GA-0012-22 </Text>
            </View>

        </View>


    </View>

 )}

 export default Profile;
