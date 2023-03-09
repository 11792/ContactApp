import React, { useState,useEffect } from 'react';
import { View, TextInput, Button,Text ,StyleSheet,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contacts from './Contacts'
const AddContact = () => {
  const [inputText, setInputText] = useState('');
  const [contact, setContact] = useState('');
  const [contactpage, setContactPage] = useState(false);

  const handleInputTextChangeName = (name) => {
    setInputText(name);
  }
  const handleInputTextChangeContact = (contact) => {
    setContact(contact);
  }

  const handleSaveButtonPress = async () => {
    try {
      const existingData = await AsyncStorage.getItem('data');
      const data = existingData ? JSON.parse(existingData) : [];
      data.push(inputText,contact," ");
      await AsyncStorage.setItem('data', JSON.stringify(data));
      setInputText('');
      setContact('');
      alert("Contact Added")
      setContactPage(true)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
  {contactpage && <Contacts/>}
  {!contactpage &&
    <View style={styles.container}>
    <Text style={styles.title}>Add Contact</Text>
      <TextInput style={styles.input}
        value={inputText}
        onChangeText={handleInputTextChangeName}
        placeholder="Name"
      />
        <TextInput style={styles.input} 
        value={contact}
        onChangeText={handleInputTextChangeContact}
        placeholder="Contact Number"
      />
   
      <TouchableOpacity style={styles.loginbutton}>
      <Text onPress={handleSaveButtonPress} style={styles.logintext}>Save</Text>
      </TouchableOpacity>
      
    </View>}
 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop:120
  },
loginbutton:{
  backgroundColor:'#0B407B',
  width:"100%",
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
})

export default AddContact;
