/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../../Screens';
import OptionsHeader from '../../Components/header/OptionsHeader';
import Questions from '../../Components/Question';
import Questions2 from '../../Components/Question2';
import Questions3 from '../../Components/Question3';
import Questions4 from '../../Components/Question4';
import {forSlide} from '../Animation';
const Stack = createStackNavigator();

export default function InstructionsStack() {
  return (
    <Stack.Navigator 
    
    screenOptions={{ 
      cardStyleInterpolator:forSlide,
      animationEnabled:true,animationTypeForReplace:'push',gestureEnabled:true ,gestureDirection:'horizontal'}}
      
      >
        <Stack.Screen
        name="Home2"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'}  navigation={navigation} showIcon={true} icon={'back'} />
          ),
        }
      }
      
        component={Screens.Dashobard.Home.Home2}
      />
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
        name="hear"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'} navigation={navigation} />
          ),
        }}
        component={Screens.Dashobard.Options.Op2.Op2}
      />
            <Stack.Screen
        name="smell"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'}  navigation={navigation}/>
          ),
        }}
        component={Screens.Dashobard.Options.Op3.Op3}
      />
             <Stack.Screen
        name="feel"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'}  navigation={navigation}/>
          ),
        }}
        component={Screens.Dashobard.Options.Op4.Op4}
      />
            <Stack.Screen
        name="dontstart"
        options={{
          header: ({ navigation }) => (
            <OptionsHeader name={'التشخيص'}  navigation={navigation}/>
          ),
        }}
        component={Screens.Dashobard.Options.Op5.Op5}
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