import React, { Component } from 'react';
import { ScrollView, Picker, View, StyleSheet, Text } from 'react-native';
import Flag from 'react-native-flags';
import * as allFlags from 'react-native-flags/flags/flat/16';


const FlagExample = ((props) => {
  const {flagcode}= props
  return (
         <View>
       <Flag code={flagcode} />
         </View>
  );
});

export default FlagExample
