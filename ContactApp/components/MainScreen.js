import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function MainScreen({navigation})
{
const backgroundImage = require('../assets/bg.jpg');
const logo = require('../assets/wcall.png');
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.contact}>Contact App</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 290,
    marginTop:140
  },
  contact:
  {
    fontSize:30,
    padding:20,
    color:'#0B407B',
    fontWeight:'bold'   
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#0B407B',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width:"90%"
  },
  signupButton: {
    backgroundColor: '#0B407B',
    padding: 10,
    borderRadius: 5,
    width:"90%",
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



