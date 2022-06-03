import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NewOrder from './Components/NewOrder';
import * as Location from 'expo-location';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const GOOGLE_MAPS_APIKEY ='AIzaSyDXad8EdmIrRRRf4ihKuWVlRrWcC5wSGus';

const Home = () => {
  const navigation = useNavigation();

  const [isOnline, setIsOnline] = useState (false);
  const [myPosition, setMyPosition] = useState (null)
  const [order, setOrder] = useState (null)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);  
  const [newOrder, setNewOrder] = useState ({
    originLatitude:  5.6540,
    originLongitude: -0.1816,

    destinationLatitude:  5.6587,
    destinationLongitude: -0.1818,

    id: 1,

    user: {
      name: 'Zanita'
    }
  })  

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.replace('Login');
    })
    .catch(error => alert(error.message))
}

  const onDecline = () => {
      setNewOrder(null);
    }

  const onAccept = (newOrder) => {
      setOrder(newOrder);
      setNewOrder(null)
    }

  const onGo = () => {
    setIsOnline(!isOnline);
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const onUserLocationChange = (event) => {
    setMyPosition(event.nativeEvent.coordinate);
  }

  const onDirectionFound = (event) => {
    console.log('Direction Found: ', event);
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 2.0,
        isFinished: order.pickedUp && event.distance < 0.2,
       })
    }
  }

  const getDestination = () => {
    if (order && order.pickedUp) {
      return{
        latitude: order.destinationLatitude,
        longitude: order.destinationLongitude}}

      return {
        latitude: order.originLatitude,
        longitude: order.originLongitude}}

  const renderBottomTitle = () => {
    if(order && order.isFinished) {
      return (
        <View style={styles.bottomContainer1}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 17, color: "white", marginTop: 5, fontWeight: 'bold' }}>  COMPLETE  </Text>
            </View>
          <Text style={{fontSize: 20, color: "white", alignSelf: 'center'}}>  {order.user.name}'s delivery is complete</Text>
        </View>
      )}
    
    if(order && order.pickedUp) {
      return (
        <View style={styles.bottomContainer1}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 17, color: "white", marginTop: 5, fontWeight: 'bold' }}>  {order.duration? order.duration.toFixed (1) : '?'} MIN  </Text>
              <Ionicons name={'person-circle'} size={35} color={"#39FF14"}/>
              <Text style={{fontSize: 17, color: "white", marginTop: 5, fontWeight: 'bold' }}>  {order.distance? order.distance.toFixed (1) : '?'} KM</Text>
            </View>
          <Text style={{fontSize: 20, color: "white", alignSelf: 'center'}}>  Dropping of {order.user.name}'s Order</Text>
        </View>
      )}

    if(order) {
      return (
        <View style={styles.bottomContainer1}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 17, color: "white", marginTop: 5, fontWeight: 'bold' }}>  {order.duration ? order.duration.toFixed (1) : '?'} MIN  </Text>
              <Ionicons name={'person-circle'} size={35} color={"#89CFF0"}/>
              <Text style={{fontSize: 17, color: "white", marginTop: 5, fontWeight: 'bold' }}>  {order.distance ? order.distance.toFixed (1) : '?'} KM</Text>
            </View>
          <Text style={{fontSize: 20, color: "white", alignSelf: 'center'}}>  Heading to {order.user.name}</Text>
        </View>
      )}  

    if (isOnline) { 
      return (
        <Text style={{fontSize: 20, color: "white"}}>You are <Text style={{color: "gold", fontWeight: "bold"}}>ONLINE</Text></Text>
        )}

      return (<Text style={{fontSize: 20, color: "white"}}>You are <Text style={{color: "orange", fontWeight: "bold"}}>Offline</Text></Text>
    );}

  return(
    <View style={{flex: 1, top: 30}}>   

      <MapView
        style={{width: '100%', height: Dimensions.get('window').height- 100}} 
        provider={PROVIDER_GOOGLE}
        showsTraffic={false}
        showsUserLocation={true}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 5.6587,
          longitude: -0.1818,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025
        }}>

{order && (
  <MapViewDirections
            origin={myPosition}
            destination={getDestination ()}
            apikey={GOOGLE_MAPS_APIKEY}
            onReady={onDirectionFound}
            strokeWidth={3}
            strokeColor={'black'}
          />)}

        </MapView>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')} 
        style={[styles.button, {top: 10, left: 10}]}>
          <View style={styles.iconContainer}>
            <Ionicons name={'person-sharp'} size={27} color={"white"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={handleSignOut}  
          style={[styles.button, {top: 65, left: 10}]}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name={'logout'} size={24} color={"white"} />
            </View>
        </TouchableOpacity>

          <TouchableOpacity  onPress={() => console.warn("Your Balance")}  
            style={styles.balanceButton}>
              <Text style={styles.balanceText}>
              <Text style={{color: "yellow"}}>GHC</Text>
                {' '}
                0.00
              </Text>
          </TouchableOpacity>


              <TouchableOpacity  onPress={(onGo)}  
                style={[styles.goButton, {bottom: 115}]}>
                  <Text style={styles.goText}>GO</Text>
              </TouchableOpacity>


        <View style={styles.bottomContainer}>
          <FontAwesome name={"sliders"} size={25} color={"white"} style={{marginHorizontal: 10}}/>
          {renderBottomTitle()}
          <FontAwesome name={"sliders"} size={25} color={"white"} style={{marginHorizontal: 10}}/>
        </View>

        {newOrder && <NewOrder 
          newOrder = {newOrder} 
          duration = {0.2}
          distance ={0.5}
          onDecline = {onDecline}
          onAccept = {() => onAccept (newOrder)}
        />}
      </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: "teal",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
    height: 70,
  },

  bottomContainer1: {
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "#007575",
    height: 70,
    width: '100%',
    flex: 1
  },

  button: {
    position: "absolute",
  },

  iconContainer: {
    backgroundColor: "teal",
    borderRadius: 50,
    width: 43,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },

  goButton: {
    position: "absolute",
    backgroundColor: "deepskyblue",
    padding: 10,
    borderRadius: 50,
    borderColor: "#ADD8E6",
    borderWidth: 5,
    width: 70,
    height: 70,
    alignItems: "center", 
    justifyContent: "center",
    left: Dimensions.get('window').width / 2 - 35,
  }, 

  goText: {
    fontSize: 25,
    color: 'white', 
    fontWeight: "bold"
  },

  balanceButton: {
    position: "absolute",
    backgroundColor: "#003838",
    borderRadius: 25,
    width: 140,
    height: 50,
    alignItems: "center", 
    justifyContent: "center",
    left: Dimensions.get('window').width / 2 - 70,
    top: 10
  }, 

  balanceText: {
    fontSize: 22,
    color: 'white', 
    fontWeight: "bold"
  }

});