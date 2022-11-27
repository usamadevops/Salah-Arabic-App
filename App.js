import 'react-native-gesture-handler';
import MainNavigation from './src/Navigations/Mains';
import { Provider } from 'react-redux';
import {store} from './src/redux/store';
import { LogBox } from 'react-native';

export default function App(){
  LogBox.ignoreLogs(['Warning: ...']); 
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}