import React from 'react';
import { View, Text, FlatList } from 'react-native';
const contacts = [
  { id: '1', name: 'Ahmed Nadeem', phone: '0300-2783955' },
  { id: '2', name: 'Saqib Javed', phone: '0300-2783955' },
  { id: '3', name: 'Sohail Nadeem', phone: '0300-2783955' },
  { id: '4', name: 'Qasim Baig', phone: '0300-2783955' },
  { id: '5', name: 'Syeda Saima', phone: '0300-2783955' },
  { id: '6', name: 'Syed Ahmed', phone: '0300-2783955' },
];
const Favourite = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 ,backgroundColor:"lightgrey", margin:5}} >
      <Text>{item.name}</Text>
      <Text>{item.phone}</Text>
    </View>
  );

  return (<>
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </>
  );
};

export default Favourite;