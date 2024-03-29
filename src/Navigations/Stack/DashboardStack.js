import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../../Screens';
import OptionsHeader from '../../Components/header/OptionsHeader';
import InstructionsStack from './InstructionsStack';
import { forSlide } from '../Animation';
import CarDropdown from '../../Screens/Dashboard/CarDropdown';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator >
      <Stack.Group screenOptions={{ 
      cardStyleInterpolator: forSlide, 
    animationEnabled: true, animationTypeForReplace: 'push', gestureDirection: 'horizontal' }}>
      <Stack.Screen
      initialParams={{car:'Nissan Maxima',model:'1999',year:'2000'}}
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
       initialParams={{
        heading: '',
        pic: '',
        sentence1: '',
        sentence2: ''
      }}
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
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Dropdown" component={CarDropdown} options={{title:"اختر سيارتك",headerShown:false}}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default App;
