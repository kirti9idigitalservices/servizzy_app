import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Account from "./src/Components/Account";
import Help from './src/Components/Help';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Help">
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Help" component={Help} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

