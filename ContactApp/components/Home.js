import { Text, View,StyleSheet,Image, ScrollView } from "react-native";
import Contacts from "./Contacts";
import Favourite from "./Favourite";
import Profile from "./Profile";
import { useState } from "react";

export default function Home()
{
function contact()
{
    setShowComponent1(true);
    setShowComponent2(false);
    setShowComponent3(false);

}
function fav()
{
    setShowComponent1(false);
    setShowComponent2(true);
    setShowComponent3(false);
}
function prof()
{
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(true);
}
   const [showComponent1, setShowComponent1] = useState(true);
   const [showComponent2, setShowComponent2] = useState(false);
   const [showComponent3, setShowComponent3] = useState(false);

    const clogo = require("../assets/call.png");
    const slogo = require("../assets/star.png");
    const ulogo = require("../assets/user.png");
    return(
    <> 
    <View style={{flex:1}}>
    <ScrollView style={{flex:1}}>
    {showComponent1 && <Contacts/> }
    {showComponent2 && <Favourite/> }
    {showComponent3 && <Profile/> }
    </ScrollView>
    <View> 
    <View style={styles.container1}>
        <Image source={clogo} style={styles.logo}/>
        <Image source={slogo} style={styles.logo} />
        <Image source={ulogo} style={styles.logo} />
    </View>
    <View style={styles.container2}>
        <Text style={styles.text} onPress={contact}>
            Contacts
        </Text>
        <Text style={styles.text} onPress={fav}>
            Favourites
        </Text>
        <Text style={styles.text} onPress={prof}>
            Profile
        </Text>
    </View>
    </View>
    </View>
   
    </>)
}
const styles = StyleSheet.create({
    logo: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        justifyContent:"flex-start",
        marginLeft:50,
        marginRight:48
      },
    container1:{
      paddingTop:10,
        flexDirection:'row',
   
    },
    container2: {
      flexDirection:'row',
      alignSelf:"center",
      paddingBottom: 10,
    
    },
    text:
    {
        marginLeft:20,
        marginRight:40,
        fontSize:16,
        color:'#0B407B',
        fontWeight:'bold'
    }
})