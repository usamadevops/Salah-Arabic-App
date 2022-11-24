/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../../Screens';
// import * as Component from '../../Components';
import OptionsHeader  from '../../Components/header/OptionsHeader';

const Stack = createNativeStackNavigator();

export default function Op4Stack(){
    return(
        <Stack.Navigator>
             <Stack.Screen
        name="feel"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'}  navigation={navigation}/>
          ),
        }}
        component={Screens.Dashobard.Options.Op4.Op4}
      />
        </Stack.Navigator>
    );
}