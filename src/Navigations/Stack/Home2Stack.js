/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../../Screens';
import * as Component from '../../Components';
import Op1Stack  from './Op1Stack';
import Op2Stack  from './Op2Stack';
import Op3Stack  from './Op3Stack';
import Op4Stack  from './Op4Stack';
import Op5Stack  from './Op5Stack';

const Stack = createNativeStackNavigator();

function Option1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home2"
        options={{
          header: ({ navigation }) => (
            <Component.Header.OptionsHeader name={'التشخيص'}  navigation={navigation} showIcon={true} />
          ),
        }}
        component={Screens.Dashobard.Home.Home2}
      />
      <Stack.Screen
        name="Op1"
        options={{
        headerShown:false
        }}
        component={Op1Stack}
      />
       <Stack.Screen
        name="Op2"
        options={{
          headerShown:false
          }}
          component={Op2Stack}
      />
       <Stack.Screen
        name="Op3"
        options={{
          headerShown:false
          }}
        component={Op3Stack}
      />
       <Stack.Screen
        name="Op4"
        options={{
          headerShown:false
          }}
        component={Op4Stack}
      />
       <Stack.Screen
        name="Op5"
        options={{
          headerShown:false
          }}
        component={Op5Stack}
      />
    </Stack.Navigator>
  );
}

export default Option1;
