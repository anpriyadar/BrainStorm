 import React, { Component } from 'react';
import { View } from 'react-native';
import Flag from '../../../../asset';

const FlagExample = ((props) => {
  const {flagcode}= props
  return (
         <View>
       <Flag code={flagcode} />
         </View>
  );
});

export default FlagExample
