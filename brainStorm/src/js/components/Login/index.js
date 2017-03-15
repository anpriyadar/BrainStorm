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


firebase.initializeApp({
apiKey: "AIzaSyCw9IjYTzUiR9JWr2zVpQViShr9ph7Ajnk",
authDomain: "brainstorm-35cbb.firebaseapp.com",
databaseURL: "https://brainstorm-35cbb.firebaseio.com",
storageBucket: "brainstorm-35cbb.appspot.com",
messagingSenderId: "648116843076"
})

  export default class login extends Component {
  constructor(props) {
  super(props)
  this.state = {
      username: '',
      password:''
            }
            const { navigator } = this.props
            navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

}

static navigatorButtons = {
  rightButtons: [
    {
      title: 'REGISTER',
      id: 'register'
    },
  ]
};

onNavigatorEvent(event) {
  const { navigator } = this.props
  if (event.id === 'register') {
  navigator.push({
      title: 'Registeration',
      screen: "brainStorm.Registeration",
    });

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
         Sign In With Your e-mail ID and Pasword
        </Text>
      </View>
        <TextInput
          style={styles.TextBox}
          placeholder={'Username'}
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
           Sign In
          </Text>
          </View>
          <Text style={[s.fontLightindigo,s.fontCenter]} onPress={()=>this.onButtonPress()}>
           Forgot your username or password?
          </Text>

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
