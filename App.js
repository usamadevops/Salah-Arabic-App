import MainNavigation from './src/Navigations/Mains';
import { Provider } from 'react-redux';
import {store} from './src/redux/store';

export default function App(){
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}