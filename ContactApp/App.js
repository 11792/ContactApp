import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import MainScreen from './components/MainScreen';
import Favourite from './components/Favourite';
import Contacts from './components/Contacts';
import Profile from './components/Profile';
const Stack = createStackNavigator();

export default function App() {
  return (

    
 
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Favourite" component={Favourite} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
