import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AddContact from './AddContact';
// const contacts = [
//   { id: '1', name: 'Ahmed Nadeem', phone: '0300-2783955' },
//   { id: '2', name: 'Saqib Javed', phone: '0300-2783955' },
//   { id: '3', name: 'Zohaib Aleem', phone: '0300-2783955' },
//   { id: '4', name: 'Qasim Baig', phone: '0300-2783955' },
//   { id: '5', name: 'Sana Adil', phone: '0300-2783955' },
//   { id: '6', name: 'Farukh Sheikh', phone: '0300-2783955' },
//   { id: '7', name: 'Aima Batool', phone: '0300-2783955' },
//   { id: '8', name: 'Sohail Nadeem', phone: '0300-2783955' },
//   { id: '9', name: 'Qasim Baig', phone: '0300-2783955' },
//   { id: '10', name: 'Syeda Saima', phone: '0300-2783955' },
//   { id: '11', name: 'Syed Ahmed', phone: '0300-2783955' },
// ];
const Contact = () => {
  const [add, setAdd] = useState(false);
  const [data, setData] = useState([]);
function addContact()
{
  setAdd(true)
}
  useEffect(() => {
    AsyncStorage.getItem('data').then((value) => {
      setData(JSON.parse(value));
    });
  }, []);
  
  return (
  <>
  {add && <AddContact/>}
  {!add &&
   <ScrollView>
        <FlatList style={{paddingTop:20}}
        data={data}      
        renderItem={({ item }) => (
          <Text style={{paddingLeft:20,fontSize:18}}>{item}</Text>
        )}
      />

<TouchableOpacity  >
      <Ionicons name="add-circle" size={64} color="#0B407B" onPress={addContact} style={styles.button}/>
    </TouchableOpacity>
    </ScrollView>
}
 </>   
     
  );
};
const styles = StyleSheet.create({
  button: {
    
    marginLeft:320,
    padding: 0,
  
  },
});

export default Contact;