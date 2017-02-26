import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import Listview from '../shared/listview/listview.js'
import ListviewRow from '../shared/listview/listviewrow.js'
import mappers from '../../mappers/countriesmapper.js'


export default class Countries extends Component {
  constructor(props) {

  super(props)
  this.state = {
      data: []
    }
    const { navigator } = this.props

    navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

}
static navigatorButtons = {
  rightButtons: [
    {
      title: 'Edit',
      id: 'edit'
    },
    {
     title: 'Add',
      id: 'add'
    }
  ]
};

onNavigatorEvent(event) {
  if (event.id === 'edit') {
    Alert.alert('NavBar', 'Edit button pressed');
  }
  if (event.id === 'add') {
    Alert.alert('NavBar', 'Add button pressed');
  }
}
componentWillMount(){
mappers.getCountryDetails().then((res)=>{
  this.setState({
 data: res
 })
})
}

showListView()
{
  const { navigator } = this.props
 const rawdata=this.state.data
 const dataSource = rawdata.map((item) =>item)

  return(
    <Listview
        data = {dataSource}
        navigator={navigator}
        listviewRow = {ListviewRow}/>
  )
}

  render() {
    return (
      this.showListView()
    )
  }
}
