import * as React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from "react-native";



function Help({ navigation }) {
    
    return (
           <View style={styles.container}>
                
                <View> 
                 <Image style={styles.image} source={ require('../imges/image1.png')}/>
                 </View>
                 
                 <View style={styles.RectangleShapeView}>
                   <Text style={{fontWeight:'bold',fontSize: 20, marginLeft: 40,marginTop: 10,}}>
                     Chat with Support</Text>
                   <Text style={{color:'grey',fontSize: 13, marginLeft: 40,marginTop: 3,}}>
                       Available 10AM - 7PM
                   </Text>
               </View>

                <View>
                 <TouchableOpacity
                 onPress={() => navigation.navigate('Otp')}>
                 <Image style={styles.icon} source={ require('../imges/image2.png')} />
               </TouchableOpacity>
               </View>

         </View>     
    );
           
               
}
export default Help;


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
            marginTop: 5,
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

});