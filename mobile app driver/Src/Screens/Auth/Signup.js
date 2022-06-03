import React, { useContext, useState } from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet, Image } from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../firebase';

const Signup = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSignUp = () => {
    if(password === confirmPassword) {
      auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with: ' + user.email);
        navigation.navigate('Continue');
    })
    .catch(error => alert(error.message));
    } else {
      alert('Passwords do not match, please try again');
    }
}

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/welcomeimage.jpg')}
        style={styles.logo}
      />

      <Text style={styles.text}>Create an account</Text>


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

      <FormInput
        labelValue={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        placeholderText="Confirm Password"
        iconType="lock-closed-outline"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Continue"
        onPress={handleSignUp}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign up with Facebook"
            btnType="logo-facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          <SocialButton
            buttonTitle="Sign up with Google"
            btnType="logo-google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: "grey", fontSize: 15}}>Have an account? <Text style={styles.navButtonText}>Sign In</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: 'teal',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    color: 'coral',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});