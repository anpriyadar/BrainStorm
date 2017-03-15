import {Navigation} from 'react-native-navigation';

import CountriesHome from '../../js/components/countries'
import Login from '../../js/components/Login'
import Home from '../../js/components/countries/demo'
import Registeration from '../../js/components/registeration'

export function registerScreens() {
  Navigation.registerComponent('brainStorm.FirstTabScreen', () => CountriesHome);
  Navigation.registerComponent('brainStorm.SecondScreen', () => Home);
  Navigation.registerComponent('brainStorm.LoginScreen', () => Login);
  Navigation.registerComponent('brainStorm.Registeration', () => Registeration);



}
