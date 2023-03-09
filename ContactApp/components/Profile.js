import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = ({ firstName="Gulfam", lastName="Safdar", email="gulfamsafder368@gmail.com", password="1234" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileName}>
          {firstName} 
        </Text>
        <Text style={styles.profileEmail}>{email}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.infoLabel}>First Name:</Text>
        <Text style={styles.infoValue}>{firstName}</Text>
        <Text style={styles.infoLabel}>Last Name:</Text>
        <Text style={styles.infoValue}>{lastName}</Text>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{email}</Text>
        <Text style={styles.infoLabel}>Password:</Text>
        <Text style={styles.infoValue}>{password}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
  },
  profileInfo: {
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoValue: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Profile;
