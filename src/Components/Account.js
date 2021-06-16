import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput} from "react-native";
import { StatusBar } from "expo-status-bar";


function Account({ navigation }) {
    
    return (
        
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RectangleShapeView}>
               <Text style={{fontWeight:'bold',fontSize: 30, marginLeft: 30,marginTop: 10,}}>My Account</Text>
           </View>
         

           <View style={styles.RectangleShapeViewblock}>
               <Image style={styles.image} source={ require('../imges/7.png')}/>
               <Text style={styles.textStyle}>My Profile</Text>
           </View>
          
           <View style={styles.RectangleShapeViewblock}>
               <Image style={styles.image} source={ require('../imges/6.png')}/>
               <Text style={styles.textStyle}>My Cars</Text>
           </View>
          
           <View style={styles.RectangleShapeViewblock}>
               <Image style={styles.image} source={ require('../imges/5.png')}/>
               <Text style={styles.textStyle}>Refer & Earn</Text>
           </View>

           <View style={styles.RectangleShapeViewblock}>
               
               <Text style={{fontWeight:'bold',fontSize: 20, marginLeft: 70,marginTop: 10,}}>Order History</Text>
           </View>
          
          
           <View style={styles.RectangleShapeViewblock}>
               <Image style={styles.image} source={ require('../imges/4.png')}/>
               <Text style={styles.textStyle}>Scan OBD</Text>
           </View>
          
           <View style={styles.RectangleShapeViewblock}>
               <Image style={styles.image} source={ require('../imges/3.png')}/>
               <Text style={styles.textStyle}>Help & Support</Text>
           </View>
          
           <View style={styles.RectangleShapeViewblock}>
               <Image style={styles.image} source={ require('../imges/2.png')}/>
               <Text style={styles.textStyle}>Share Servizzy</Text>
           </View>
           <View style={styles.RectangleShapeViewblock}>
               <Image style={styles.image} source={ require('../imges/1.png')}/>
               <Text style={styles.textStyle}>Logout</Text>
           </View>
          

    </View>
      
    );
  }
  export default Account;

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2,

    },

  RectangleShapeView: {
 
      width: '100%',
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
       
        },
 RectangleShapeViewblock: {
 
          width: '100%',
            height: 60,
            backgroundColor: 'white',
            flexDirection: 'row',
            marginTop: 20,
           
            },
  image:{
              height: 30,
              width: 30,
              marginLeft: 8,
              marginTop: 15,
          },
   
   textStyle: {
    fontWeight:'bold',
    fontSize: 20,
     marginLeft: 30,
     marginTop: 15,
           
          },

});