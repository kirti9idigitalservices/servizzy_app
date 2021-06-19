import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,} from "react-native";
import { StatusBar } from "expo-status-bar";


function OrderHistory({ navigation }) {
    
    return (
           <View style={styles.container}>
                <StatusBar style="auto" />
                <View> 
                <Image style={styles.image} source={ require('../imges/Order.png')}/>
                 </View>
                 
                 <View style={styles.RectangleShapeView}>
                   <Text style={{fontWeight:'bold',fontSize: 20, marginLeft: 40,marginTop: 10,}}>Sorry,</Text>
                   <Text style={{color:'grey',fontSize: 13, marginLeft: 40,marginTop: 3, marginRight:90}}>
                       It seems like you don't have any ongoing service for your car.
                   </Text>
               </View>
  
               <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate('Help')}>
               <Text style={styles.textStyle}>Book a service</Text>
               </TouchableOpacity>
                </View>

         </View>     
    );
           
               
}
export default OrderHistory;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',

  },
image:{
            height: 250,
            width: 250,
            marginTop: 20,
     },

    
  RectangleShapeView: {
 
    width: '100%',
      height: 60,
      backgroundColor: 'white',
      marginTop: 10,
      }, 
      
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        
      },

      buttonClose: {
        backgroundColor: '#FF4500',
        width:'90%',
        marginLeft: 20,
        marginTop: 30,
      },

      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
       
      },

});