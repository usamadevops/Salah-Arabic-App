/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../../Screens';
import OptionsHeader  from '../../Components/header/OptionsHeader';
import Home2Stack from './Home2Stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header: ({ navigation }) => {
            return <OptionsHeader name={'الصفحة الرئيسية'} navigation={navigation} icon={true} showIcon={true} />;
          },
          // headerShown:false
        }}
        name="Home1" component={Screens.Dashobard.Home.Home1} 
        />
      <Stack.Screen
        name="Home2Stack"
        options={{
          headerShown: false,
        }}
        component={Home2Stack}
      />
    </Stack.Navigator>
  );
}

export default App;
