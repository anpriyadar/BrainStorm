/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import  firebase from 'firebase';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import componentStyles from '../../../styles/base.js'
const s = StyleSheet.create(componentStyles)


  export default class registeration extends Component {
  constructor(props) {
  super(props)
  this.state = {
      username: '',
      password:''
            }
}

onButtonPress(){
const {username,password}=this.state

  firebase.auth().createUserWithEmailAndPassword(username,password)
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Banner}>
        <Text style={styles.BannerText} onPress={()=>this.onButtonPress()}>
         Register With Your e-mail ID and Pasword
        </Text>
      </View>
        <TextInput
          style={styles.TextBox}
          placeholder={'e-mail@domain.com'}
          value={this.state.username}
          onChangeText={username=>this.setState({username})}

          />
        <TextInput
          style={styles.TextBox}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={password=>this.setState({password})}
          />

        <View style={[s.sideMarginLg,s.topMarginMd,s.backgroundBrandDIndigo,s.alignItemsCenter,s.height40,s.justifyCenter,s.borderFullGreyThin,s.borderRadius,s.bottomMarginSm]}>
          <Text style={styles.LoginButton} onPress={()=>this.onButtonPress()}>
           Register
          </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  Banner: {
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 20,
    marginBottom: 20,
  },
  TextBox:
  {
    height: 40,
    marginLeft:20,
    marginRight:20,
    borderWidth: 0.5,
    backgroundColor: '#FFF',
  },
  LoginButton: {
    justifyContent: 'center',
    color: '#FFF',
    fontSize: 14
  },
});
