import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../Stack/AuthStack';
import DashboardStack from '../Stack/DashboardStack';
import {useSelector} from 'react-redux';

export default function App() {
  const Auth = useSelector(state => {
    return state.AuthReducer.Authentication;
  });
  return (
    <NavigationContainer>
      {Auth ? <DashboardStack /> : <AuthStack />}
      {/* <DashboardStack /> */}
    </NavigationContainer>
  );
}
