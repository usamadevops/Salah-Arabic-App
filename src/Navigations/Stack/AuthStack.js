import * as React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../../Screens';
import { forSlide } from '../Animation';
const Stack = createStackNavigator();


function App() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
		cardStyleInterpolator: Platform. forSlide,
    animationEnabled:true,animationTypeForReplace:'push',gestureEnabled:true ,gestureDirection:'horizontal'
      }}>
      <Stack.Screen name="SplashScreen" component={Screens.Auth.SplashScreen}  />
      <Stack.Screen name="LoginScreen" component={Screens.Auth.Login}  />
    </Stack.Navigator>
  );
}

export default App;
