import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { StatusBar } from "expo-status-bar";


function OrderHistory({ navigation }) {
    
    return (
           <View style={styles.container}>
                <StatusBar style="auto" />
                <View> 
                 <Image style={styles.image} source={ require('../imges/image 3.png')}/>
                 </View>
                 
                 <View style={styles.RectangleShapeView}>
                   <Text style={{fontWeight:'bold',fontSize: 20, marginLeft: 40,marginTop: 10,}}>Sorry,</Text>
                   <Text style={{color:'grey',fontSize: 13, marginLeft: 40,marginTop: 3,}}>
                       It seems like you don't have any ongoing service for your car.
                   </Text>
               </View>
  
               <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}>
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
            height: 350,
            width: 350,
            marginTop: 20,
     },

    
  RectangleShapeView: {
 
    width: '100%',
      height: 60,
      backgroundColor: 'white',
      marginTop: 20,
      }, 
      
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        
      },

      buttonClose: {
        backgroundColor: '#FF4500',
        width:'70%',
        marginLeft: 90,
        marginTop: 30,
      },

      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
       
      },

});