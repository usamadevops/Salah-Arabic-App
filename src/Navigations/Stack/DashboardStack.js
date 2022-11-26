/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../../Screens';
import OptionsHeader  from '../../Components/header/OptionsHeader';
import InstructionsStack from './InstructionsStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header: ({ navigation }) => {
            return <OptionsHeader name={'الصفحة الرئيسية'} navigation={navigation} icon={null} showIcon={true} />;
          },
        }}
        name="Home1" component={Screens.Dashobard.Home.Home1} 
        />
        <Stack.Screen
        options={{
          header: ({ navigation }) => {
            return <OptionsHeader name={'دروس'} navigation={navigation} icon={'back'} showIcon={false} />;
          },
        }}
        name="tutorialList" component={Screens.Dashobard.Home.TutorialList} 
        />
         <Stack.Screen
        options={{
          header: ({ navigation }) => {
            return <OptionsHeader name={'دروس'} navigation={navigation} icon={'back'} showIcon={false} />;
          },
        }}
        name="viewtutorial" component={Screens.Dashobard.Home.Viewtutorial} 
        />
         <Stack.Screen
        options={{
          header: ({ navigation }) => {
            return <OptionsHeader name={'التفتيش المنتظم'} navigation={navigation} icon={'back'} showIcon={false} />;
          },
        }}
        name="inspection" component={Screens.Dashobard.Home.Inspection} 
        />
         <Stack.Screen
        options={{
          header: ({ navigation }) => {
            return <OptionsHeader name={'فحص ما قبل الشراء'} navigation={navigation} icon={'back'} showIcon={false} />;
          },
        }}
        name="prepurchase" component={Screens.Dashobard.Home.Prepurchase} 
        />

      <Stack.Screen
        name="Home2Stack"
        options={{
          headerShown: false,
        }}
        component={InstructionsStack}
      />
    </Stack.Navigator>
  );
}

export default App;
