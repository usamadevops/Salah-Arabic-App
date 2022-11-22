// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../../Screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={Screens.Auth.SplashScreen} />
      <Stack.Screen name="LoginScreen" component={Screens.Auth.Login} />
    </Stack.Navigator>
  );
}

export default App;
