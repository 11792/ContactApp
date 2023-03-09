import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleLogin = () => {
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    })
    .then(response => {
        console.log(response)
        navigation.navigate("Home")
    })
    .catch(error => {
      console.log(error)
    });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/call.png")}/>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginbutton}>
      <Text onPress={handleLogin} style={styles.logintext}>LOGIN</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
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
  logo:
  {
    width:90,
    height:90,
    marginBottom:20
  },
  loginbutton:{
    backgroundColor:'#0B407B',
    width:"90%",
    marginTop:20,
    padding:10
  },
  logintext:
  {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight:'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '100%'
  },
  error: {
    color: 'red',
    marginTop: 10
  }
});

export default Login;
