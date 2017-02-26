import {Navigation} from 'react-native-navigation';

import CountriesHome from '../../js/components/countries'
import Home from '../../js/components/countries/demo'

export function registerScreens() {
  Navigation.registerComponent('brainStorm.FirstTabScreen', () => CountriesHome);
  Navigation.registerComponent('brainStorm.SecondScreen', () => Home);


}
