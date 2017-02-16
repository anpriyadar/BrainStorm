import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import componentStyles from '../../../../styles/base.js'
import Flag from '../countries/flag.js'
const s = StyleSheet.create(componentStyles)


export default class hello extends Component {
  constructor(props) {
  super(props)
  }
  render() {
    const {  rowData } = this.props
    return (
      <View style={[s.flexFull]}>
        <View style={[s.flexRow, s.alignItemsCenter, s.borderBottomGreyThin]}>
          <View style={[s.justifyFlexStart, s.flexFull, s.flexThird, s.flexRow,]}>
          <View style={[s.flexRow]}>
            <Flag flagcode={rowData.alpha2Code}/>
          </View>
          <View style={[s.flexFull,s.flexRow, s.topPaddingXSm,s.fullMarginSm, s.alignItemsCenter]}>
              <Text style={[s.fontBold, s.fontXLg]}>
              {rowData.name}
              </Text>
          </View>

        </View>
        <View style={[s.alignItemsFlexEnd]}>
          <Image source={require('../../../../asset/arrow.png')} />
        </View>
      </View>
      </View>
    );
  }
}
