import * as React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput,} from "react-native";



function Otp({ navigation }) {
    
    return (
           <View style={styles.container}>
                
                <View> 
                 <Image style={styles.image} source={ require('../imges/OTP1.png')}/>
                 </View>
                 
                 <View style={styles.RectangleShapeView}>
                   <Text style={{fontWeight:'bold',fontSize: 20, marginLeft: 70,marginTop: 10,}}>
                     Enter your mobile number</Text>
                   <Text style={{color:'grey',fontSize: 13, marginLeft: 100,marginTop: 3, marginRight:100,}}>
                      We'll send a 4-Digit OTP on your mobike for verfication.
                   </Text>
               </View>

               <View style={styles.inputView}>
               <Text style={{marginTop:8, marginLeft:6,}}>+91</Text>
                  <TextInput
                      style={styles.TextInput}
                      placeholder=" mobile number"
                     placeholderTextColor="grey"
                     maxLength = {40}
                  
                     />
       

   </View>

               <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate('Account')}>
               <Text style={styles.textStyle}>GET OTP</Text>
               </TouchableOpacity>
                </View>

         </View>     
    );
           
               
}
export default Otp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor:'white',

  },
image:{
            height: 210,
            width: 160,
            marginTop: 5,
            marginLeft: 40
     },
icon: {
         height: 50,
    width: 50,
    marginTop: 180,
    marginLeft:280,

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
        width:'90%',
        marginLeft: 10,
        marginTop: 30,
      },

      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        },

      
      inputView: {
       // backgroundColor: 'white',
          borderRadius: 3,
          borderColor:'red',
            width: '80%',
             height: 40,
             marginBottom: 5,
             marginTop:20,
             flexDirection: 'row',
             marginLeft: 35,
             },

             
            TextInput: {
                height: 35,
                marginLeft: 5,
                paddingLeft: 8,
                marginRight: 60,
             },
});