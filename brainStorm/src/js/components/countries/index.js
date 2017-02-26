import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';

import Listview from '../shared/listview/listview.js'
import ListviewRow from '../shared/listview/listviewrow.js'
import mappers from '../../mappers/countriesmapper.js'
import componentStyles from '../../../styles/base.js'
import RNRestart from 'react-native-restart';

const s = StyleSheet.create(componentStyles)


export default class Countries extends Component {
  constructor(props) {

  super(props)
  this.state = {
      data: [],
      reload:false
            }
    const { navigator } = this.props

    navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.handleRowClick = this.handleRowClick.bind(this)


}
componentWillMount(){
mappers.getCountryDetails().then((res)=>{
  this.setState({
 data: res
 })
})
}

static navigatorButtons = {
  rightButtons: [
    {
      title: 'Reload',
      id: 'reload'
    },
  ]
};

onNavigatorEvent(event) {
  const rawdata=this.state.data
  const reload=this.state.reload
  const dataSource = rawdata.map((item) =>item)
  if (event.id === 'reload' && reload===true) {
  RNRestart.Restart()
  }
  else{
    alert('Reload can be only performed after search')
  }
}

handleRowClick(data) {
  const { navigator } = this.props
  const detailsProps = { data }
  const screentitle= detailsProps.data.name
  navigator.push({
    title: screentitle,
    screen: "brainStorm.SecondScreen",
    passProps:{ detailsProps:detailsProps}
  });
  }

filterSearch(text){
  const rawdata = this.state.data
  const dataSource = rawdata.map((item) =>item)
  const newData = dataSource.filter((item)=>{
  const itemData = item.name.toUpperCase()
  const textData = text.toUpperCase()
  return itemData.indexOf(textData) > -1
})
this.setState({
data: newData,
reload:true
})
}

showListView()
{
  const { navigator } = this.props
 const rawdata=this.state.data
 const dataSource = rawdata.map((item) =>item)
 const SearchText= this.state.text
 const placeHolderText = 'Search by Country Name'

  return(
    <View style={s.flexFull}>
    <TextInput
      style={s.searchBar}
      placeholder={placeHolderText}
      onChangeText={(text)=>this.filterSearch(text)}
      />
    <Listview
        data = {dataSource}
        navigator={navigator}
        handleRowClick={this.handleRowClick}
        listviewRow = {ListviewRow}/>
      </View>
  )
}

  render() {
    console.log(this.state.data)
    return (
      this.showListView()
    )
  }
}
