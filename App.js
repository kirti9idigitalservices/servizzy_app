import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Account from "./src/Components/Account";
import Help from './src/Components/Help';
import OrderHistory from './src/Components/OrderHistory';
import Otp from './src/Components/Otp';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Account">
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Help" component={Help} /> 
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Otp" component={Otp} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

