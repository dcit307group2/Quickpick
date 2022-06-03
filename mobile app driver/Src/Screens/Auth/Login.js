import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../firebase'

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Login = () => {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        navigation.replace("Home");
    })
    .catch(error => alert(error.message))
}

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/welcomeimage.jpg')} style={styles.logo}/>

      <View style={styles.header}>
        <Text style={styles.text}>Quick</Text>
        <Text style={[styles.text, {color: "teal"}]}>Pick</Text>
      </View>
      
      <FormInput
        labelValue={email}
        onChangeText={text => setEmail(text)}
        placeholderText="Email"
        iconType="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={text => setPassword(text)}
        placeholderText="Password"
        iconType="lock-closed-outline"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={handleLogin}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={{fontSize: 16, fontWeight: '100', color: 'coral'}}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="logo-facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="logo-google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={{color: "grey", fontSize: 15}}>Don't Have an Account? <Text style={styles.navButtonText}>Sign Un</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: 'coral',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 25,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'coral',
  },
  header: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 5
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: SCREEN_HEIGHT / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
});