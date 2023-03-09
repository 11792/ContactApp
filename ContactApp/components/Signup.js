import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
export default function Signup({navigation}){
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = () => {
    axios.post('https://reqres.in/api/register', { 
    fName:fName,
    lName:lName,
    email: email,
    password: password,
    }).then( response => {
     console.log(response); 
     alert('signup sucessful')
     navigation.navigate('Login')
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo}
      source={require("../assets/call.png")}/>
       <Text style={styles.title}>Signup</Text>
       <TextInput style={styles.input}
        placeholder='First Name'
        onChangeText={text => setFName(text)}
        value={fName}
      />
       <TextInput style={styles.input}
        placeholder='Last Name'
        onChangeText={text => setLName(text)}
        value={lName}
      />
      <TextInput style={styles.input}
        placeholder='Email'
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity onPress={handleSignup} style={styles.signbutton}>
        <Text style={styles.signuptext}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight:'bold'
  },
  logo:
  {
    width:90,
    height:90,
    marginBottom:20
  },
  signbutton:{
    backgroundColor:'#0B407B',
    width:"90%",
    marginTop:20,
    padding:10
  },
  signuptext:
  {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '100%'
  },
})