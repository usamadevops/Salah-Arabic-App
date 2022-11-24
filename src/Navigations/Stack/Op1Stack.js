/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../../Screens';
import OptionsHeader from '../../Components/header/OptionsHeader';
import Questions from '../../Components/Question';
import Questions2 from '../../Components/Question2';
import Questions3 from '../../Components/Question3';
import Questions4 from '../../Components/Question4';

const Stack = createNativeStackNavigator();

export default function Op1Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="eye"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'} navigation={navigation} />
          ),
        }}
        component={Screens.Dashobard.Options.Op1.Op1}
      />
      <Stack.Screen
        name="questions"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'} navigation={navigation} />
          ),
        }}
        component={Questions}
      />
      <Stack.Screen
        name="questions2"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'} navigation={navigation} />
          ),
        }}
        component={Questions2}
      />
      <Stack.Screen
        name="questions3"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'} navigation={navigation} />
          ),
        }}
        component={Questions3}
      />
       <Stack.Screen
        name="Questions4"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'} navigation={navigation} />
          ),
        }}
        component={Questions4}
      />

    </Stack.Navigator>
  );
}