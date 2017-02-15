/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import CountriesHome from './src/js/components/countries'

export default class brainStorm extends Component {
  render() {
    return (
      <View>
      <CountriesHome/>
         </View>
    );
  }
}

AppRegistry.registerComponent('brainStorm', () => brainStorm);
