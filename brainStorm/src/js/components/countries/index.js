import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,

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
 const rawdata=this.state.data
 const dataSource = rawdata.map((item) =>item)

  return(
    <Listview
        data = {dataSource}
        listviewRow = {ListviewRow}/>
  )
}

  render() {
    return (
      this.showListView()  
    )
  }
}
